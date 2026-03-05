/**
 * @component TaskPage
 * @part-of Web3School — Daily Learning
 * @design Individual lesson/task view with content, quiz, tutor chat, completion
 */
"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Star,
  BookOpen,
  Code,
  FileText,
  HelpCircle,
  PenLine,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { AITutorChat } from "@/components/app/AITutorChat";
import { LessonContent } from "@/components/app/LessonContent";
import { cn } from "@/lib/utils";

interface TaskContent {
  lesson_text?: string;
  exercise_prompt?: string;
  quiz_questions?: {
    question: string;
    options: string[];
    correct_index: number;
    explanation: string;
  }[];
  project_brief?: string;
  resources?: {
    title: string;
    url: string;
    type: string;
  }[];
}

interface TaskData {
  id: string;
  title: string;
  description: string | null;
  task_type: string;
  content: TaskContent;
  estimated_minutes: number;
  difficulty: string;
  status: string;
  xp_reward: number;
  week_number: number;
  day_number: number;
}

const TASK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  lesson: BookOpen,
  exercise: Code,
  project: FileText,
  quiz: HelpCircle,
  reflection: PenLine,
};

export default function TaskPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = use(params);
  const router = useRouter();
  const [task, setTask] = useState<TaskData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCompleting, setIsCompleting] = useState(false);
  const [showXPReward, setShowXPReward] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(`/api/tasks/${taskId}`);
        if (!res.ok) throw new Error("Task not found");
        const data = await res.json();
        setTask(data);
      } catch (err) {
        console.error("Task fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTask();
  }, [taskId]);

  // Auto-generate content if task loaded but content is empty
  useEffect(() => {
    if (!task) return;
    const c = task.content as TaskContent;
    const isEmpty = !c?.lesson_text && !c?.exercise_prompt && !c?.project_brief &&
      (!c?.quiz_questions || c.quiz_questions.length === 0);
    if (isEmpty) handleGenerateContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task?.id]);

  const handleComplete = async () => {
    if (!task || isCompleting) return;
    setIsCompleting(true);

    try {
      const res = await fetch(`/api/tasks/${task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "completed" }),
      });

      if (!res.ok) throw new Error("Failed to complete task");
      const data = await res.json();

      setXpAwarded(data.xp_awarded || task.xp_reward);
      setShowXPReward(true);
      setTask((prev) => (prev ? { ...prev, status: "completed" } : null));

      // Hide XP animation after 3 seconds
      setTimeout(() => setShowXPReward(false), 3000);
    } catch (err) {
      console.error("Complete error:", err);
    } finally {
      setIsCompleting(false);
    }
  };

  const handleGenerateContent = async () => {
    if (!task || isGenerating) return;
    setIsGenerating(true);
    setGenerateError(false);
    try {
      const res = await fetch(`/api/tasks/${task.id}/generate`, { method: "POST" });
      if (!res.ok) throw new Error("Generation failed");
      const data = await res.json();
      setTask((prev) => prev ? { ...prev, content: data.content } : null);
    } catch {
      setGenerateError(true);
    } finally {
      setIsGenerating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-3">
          <Loader2 className="w-8 h-8 text-text-muted animate-spin mx-auto" />
          <p className="text-text-muted text-sm">Preparing your lesson...</p>
        </div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] px-4">
        <div className="text-center space-y-3">
          <p className="text-text-secondary">Task not found.</p>
          <Button
            onClick={() => router.push("/learn")}
            variant="outline"
            className="border-border rounded-xl"
          >
            Back to Learning
          </Button>
        </div>
      </div>
    );
  }

  const Icon = TASK_ICONS[task.task_type] || BookOpen;

  // Robustly extract content — handles string, object, and double-wrapped JSON
  function extractContent(raw: unknown): TaskContent {
    // String → try JSON parse
    if (typeof raw === "string") {
      const t = raw.trim();
      if (t.startsWith("{")) {
        try { return extractContent(JSON.parse(t)); } catch { /* fall through */ }
      }
      return {};
    }
    if (!raw || typeof raw !== "object") return {};
    const obj = raw as TaskContent;
    // lesson_text itself is a JSON blob — unwrap one more level
    const lt = obj.lesson_text?.trim() ?? "";
    if (lt.startsWith("{")) {
      try {
        const inner = JSON.parse(lt) as TaskContent;
        if (inner.lesson_text || inner.exercise_prompt) return inner;
      } catch { /* fall through */ }
    }
    return obj;
  }

  // Replace literal \n escape sequences with real newlines for markdown rendering
  function normalizeMarkdown(text: string): string {
    return text.replace(/\\n/g, "\n");
  }

  const content = extractContent(task.content);
  const isCompleted = task.status === "completed";

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* XP Reward Animation */}
      <AnimatePresence>
        {showXPReward && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <div className="bg-navy-mid border border-border rounded-xl px-8 py-6 shadow-2xl text-center">
              <Star className="w-12 h-12 text-amber-warning mx-auto mb-2" />
              <p className="text-3xl font-heading font-bold text-white">
                +{xpAwarded} XP
              </p>
              <p className="text-text-secondary text-sm mt-1">Task Complete!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-center gap-3">
        <Button
          onClick={() => router.push("/learn")}
          variant="ghost"
          size="icon"
          className="text-text-muted hover:text-text-primary"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <Icon className="w-4 h-4 text-text-secondary" />
            <span className="text-xs font-mono text-text-secondary capitalize">
              {task.task_type}
            </span>
            <span className="text-text-muted text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {task.estimated_minutes}min
            </span>
            <span className="text-text-muted text-xs capitalize">
              {task.difficulty}
            </span>
          </div>
          <h1 className="text-xl font-heading font-bold text-text-primary truncate">
            {task.title}
          </h1>
        </div>
      </div>

      {/* Lesson Content */}
      {content.lesson_text && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-navy-mid border border-border rounded-xl p-6"
        >
          <LessonContent markdown={normalizeMarkdown(content.lesson_text)} />
        </motion.div>
      )}

      {/* Exercise Prompt */}
      {content.exercise_prompt && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-navy-mid border border-border rounded-xl p-6"
        >
          <h3 className="font-heading font-bold text-text-primary mb-3">
            Exercise
          </h3>
          <div className="prose prose-invert prose-sm max-w-none [&_p]:text-text-secondary [&_li]:text-text-secondary [&_strong]:text-text-primary [&_code]:text-cyan-accent [&_code]:bg-navy-deep [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {normalizeMarkdown(content.exercise_prompt ?? "")}
            </ReactMarkdown>
          </div>
        </motion.div>
      )}

      {/* Project Brief */}
      {content.project_brief && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-navy-mid border border-border rounded-xl p-6"
        >
          <h3 className="font-heading font-bold text-text-primary mb-3">
            Project Brief
          </h3>
          <div className="prose prose-invert prose-sm max-w-none [&_p]:text-text-secondary [&_li]:text-text-secondary [&_strong]:text-text-primary [&_code]:text-cyan-accent [&_code]:bg-navy-deep [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {normalizeMarkdown(content.project_brief ?? "")}
            </ReactMarkdown>
          </div>
        </motion.div>
      )}

      {/* Quiz */}
      {content.quiz_questions && content.quiz_questions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h3 className="font-heading font-bold text-text-primary">Quiz</h3>
          {content.quiz_questions.map((q, qi) => (
            <div
              key={qi}
              className="bg-navy-mid border border-border rounded-xl p-5 space-y-3"
            >
              <p className="text-text-primary font-medium text-sm">
                {qi + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((option, oi) => {
                  const isSelected = quizAnswers[qi] === oi;
                  const isCorrect = oi === q.correct_index;
                  const showResult = quizSubmitted;

                  return (
                    <button
                      key={oi}
                      onClick={() =>
                        !quizSubmitted &&
                        setQuizAnswers((prev) => ({ ...prev, [qi]: oi }))
                      }
                      disabled={quizSubmitted}
                      className={cn(
                        "w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors border",
                        showResult && isCorrect
                          ? "border-green-success bg-green-success/10 text-green-success"
                          : showResult && isSelected && !isCorrect
                            ? "border-red-500 bg-red-500/10 text-red-400"
                            : isSelected
                              ? "border-purple-primary bg-purple-primary/10 text-text-primary"
                              : "border-border text-text-secondary hover:border-border/80"
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {quizSubmitted && (
                <p className="text-text-muted text-xs mt-2">
                  {q.explanation}
                </p>
              )}
            </div>
          ))}
          {!quizSubmitted && (
            <Button
              onClick={() => setQuizSubmitted(true)}
              disabled={
                Object.keys(quizAnswers).length !==
                (content.quiz_questions?.length || 0)
              }
              className="bg-white text-black hover:opacity-85 rounded-md"
            >
              Check Answers
            </Button>
          )}
        </motion.div>
      )}

      {/* Resources */}
      {content.resources && content.resources.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-heading font-bold text-text-primary text-sm">
            Resources
          </h3>
          <div className="space-y-1.5">
            {content.resources.map((resource, i) => (
              <a
                key={i}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white hover:opacity-85 transition-colors"
              >
                <ArrowRight className="w-3 h-3" />
                {resource.title}
                <span className="text-text-muted text-xs capitalize">
                  ({resource.type})
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Empty content fallback */}
      {!content.lesson_text && !content.exercise_prompt && !content.project_brief && (!content.quiz_questions || content.quiz_questions.length === 0) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111111] border border-white/[0.08] rounded-xl p-8 text-center"
        >
          {isGenerating ? (
            <div className="space-y-3">
              <Loader2 className="w-8 h-8 text-[#10B981] animate-spin mx-auto" />
              <p className="text-white font-medium">Generating your lesson content...</p>
              <p className="text-[#666666] text-sm">This takes about 10–15 seconds.</p>
            </div>
          ) : generateError ? (
            <div className="space-y-4">
              <p className="text-white font-medium">Content generation failed.</p>
              <p className="text-[#666666] text-sm">Check your connection and try again.</p>
              <Button
                onClick={handleGenerateContent}
                className="bg-white text-black hover:opacity-85 rounded-md"
              >
                Retry
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-white font-medium">Content not generated yet.</p>
              <p className="text-[#666666] text-sm">Click below to generate your lesson content.</p>
              <Button
                onClick={handleGenerateContent}
                className="bg-white text-black hover:opacity-85 rounded-md"
              >
                Generate Content
              </Button>
            </div>
          )}
        </motion.div>
      )}

      {/* Complete / Next buttons */}
      <div className="flex gap-3 pt-4 border-t border-border">
        {!isCompleted ? (
          <Button
            onClick={handleComplete}
            disabled={isCompleting}
            className="flex-1 bg-white text-black hover:opacity-85 rounded-md py-5 font-semibold"
          >
            {isCompleting ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <Check className="w-4 h-4 mr-2" />
            )}
            {isCompleting ? "Completing..." : `Mark as Complete (+${task.xp_reward} XP)`}
          </Button>
        ) : (
          <Button
            onClick={() => router.push("/learn")}
            className="flex-1 bg-white text-black hover:opacity-85 rounded-md py-5 font-semibold"
          >
            Next Task
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        )}
      </div>

      {/* AI Tutor Chat */}
      <AITutorChat taskId={task.id} />
    </div>
  );
}
