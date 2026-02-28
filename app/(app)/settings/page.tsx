/**
 * @component SettingsPage
 * @part-of Web3School — Settings & Preferences
 * @design Profile, notifications, learning prefs, account management
 */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Loader2,
  Save,
  User,
  Bell,
  BookOpen,
  Shield,
  Moon,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/lib/hooks/useUser";
import { cn } from "@/lib/utils";

interface SettingsData {
  full_name: string;
  email: string;
  timezone: string;
  // Notification prefs (stored client-side for now)
  email_reminders: boolean;
  push_notifications: boolean;
  reminder_frequency: string;
  // Learning prefs
  daily_goal: number;
  preferred_difficulty: string;
}

const TIMEZONES = [
  "UTC",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Asia/Tokyo",
  "Asia/Shanghai",
  "Asia/Kolkata",
  "Australia/Sydney",
];

export default function SettingsPage() {
  const router = useRouter();
  const { profile, signOut, refreshProfile } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState<SettingsData>({
    full_name: "",
    email: "",
    timezone: "UTC",
    email_reminders: true,
    push_notifications: false,
    reminder_frequency: "daily",
    daily_goal: 10,
    preferred_difficulty: "beginner",
  });

  useEffect(() => {
    if (profile) {
      setSettings((prev) => ({
        ...prev,
        full_name: profile.full_name || "",
        email: profile.email || "",
        timezone: profile.timezone || "UTC",
      }));
      setIsLoading(false);
    }
  }, [profile]);

  const handleSave = async () => {
    setIsSaving(true);
    setSaved(false);

    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: settings.full_name,
          timezone: settings.timezone,
        }),
      });

      if (!res.ok) throw new Error("Failed to save");
      setSaved(true);
      refreshProfile();
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      console.error("Save error:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-purple-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
      {/* Profile Section */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-purple-primary" />
          <h2 className="font-heading font-bold text-text-primary">Profile</h2>
        </div>

        <div className="bg-navy-mid border border-border rounded-2xl p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full_name" className="text-text-secondary text-sm">
              Full Name
            </Label>
            <Input
              id="full_name"
              value={settings.full_name}
              onChange={(e) =>
                setSettings((s) => ({ ...s, full_name: e.target.value }))
              }
              className="bg-navy-deep border-border text-text-primary rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-text-secondary text-sm">
              Email
            </Label>
            <Input
              id="email"
              value={settings.email}
              disabled
              className="bg-navy-deep border-border text-text-muted rounded-xl"
            />
            <p className="text-text-muted text-xs">
              Email cannot be changed here.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone" className="text-text-secondary text-sm">
              Timezone
            </Label>
            <Select
              value={settings.timezone}
              onValueChange={(value) =>
                setSettings((s) => ({ ...s, timezone: value }))
              }
            >
              <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-navy-mid border-border">
                {TIMEZONES.map((tz) => (
                  <SelectItem key={tz} value={tz} className="text-text-primary">
                    {tz.replace(/_/g, " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.section>

      <Separator className="bg-border" />

      {/* Notification Preferences */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-purple-primary" />
          <h2 className="font-heading font-bold text-text-primary">
            Notifications
          </h2>
        </div>

        <div className="bg-navy-mid border border-border rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-primary text-sm font-medium">
                Email Reminders
              </p>
              <p className="text-text-muted text-xs">
                Daily streak reminders via email
              </p>
            </div>
            <Switch
              checked={settings.email_reminders}
              onCheckedChange={(checked) =>
                setSettings((s) => ({ ...s, email_reminders: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-primary text-sm font-medium">
                Push Notifications
              </p>
              <p className="text-text-muted text-xs">
                Browser push notifications (coming soon)
              </p>
            </div>
            <Switch
              checked={settings.push_notifications}
              onCheckedChange={(checked) =>
                setSettings((s) => ({ ...s, push_notifications: checked }))
              }
              disabled
            />
          </div>

          <div className="space-y-2">
            <Label className="text-text-secondary text-sm">
              Reminder Frequency
            </Label>
            <Select
              value={settings.reminder_frequency}
              onValueChange={(value) =>
                setSettings((s) => ({ ...s, reminder_frequency: value }))
              }
            >
              <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-navy-mid border-border">
                <SelectItem value="daily" className="text-text-primary">
                  Daily
                </SelectItem>
                <SelectItem value="weekdays" className="text-text-primary">
                  Weekdays Only
                </SelectItem>
                <SelectItem value="weekly" className="text-text-primary">
                  Weekly Summary
                </SelectItem>
                <SelectItem value="never" className="text-text-primary">
                  Never
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.section>

      <Separator className="bg-border" />

      {/* Learning Preferences */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-purple-primary" />
          <h2 className="font-heading font-bold text-text-primary">
            Learning Preferences
          </h2>
        </div>

        <div className="bg-navy-mid border border-border rounded-2xl p-6 space-y-4">
          <div className="space-y-2">
            <Label className="text-text-secondary text-sm">
              Daily Goal (minutes)
            </Label>
            <Select
              value={String(settings.daily_goal)}
              onValueChange={(value) =>
                setSettings((s) => ({ ...s, daily_goal: Number(value) }))
              }
            >
              <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-navy-mid border-border">
                <SelectItem value="5" className="text-text-primary">
                  5 minutes
                </SelectItem>
                <SelectItem value="10" className="text-text-primary">
                  10 minutes
                </SelectItem>
                <SelectItem value="15" className="text-text-primary">
                  15 minutes
                </SelectItem>
                <SelectItem value="30" className="text-text-primary">
                  30 minutes
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-text-secondary text-sm">
              Preferred Difficulty
            </Label>
            <Select
              value={settings.preferred_difficulty}
              onValueChange={(value) =>
                setSettings((s) => ({ ...s, preferred_difficulty: value }))
              }
            >
              <SelectTrigger className="bg-navy-deep border-border text-text-primary rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-navy-mid border-border">
                <SelectItem value="beginner" className="text-text-primary">
                  Beginner — Take it slow
                </SelectItem>
                <SelectItem value="intermediate" className="text-text-primary">
                  Intermediate — Challenge me
                </SelectItem>
                <SelectItem value="advanced" className="text-text-primary">
                  Advanced — Full speed
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.section>

      <Separator className="bg-border" />

      {/* Appearance */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <Moon className="w-4 h-4 text-purple-primary" />
          <h2 className="font-heading font-bold text-text-primary">
            Appearance
          </h2>
        </div>

        <div className="bg-navy-mid border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-primary text-sm font-medium">Dark Mode</p>
              <p className="text-text-muted text-xs">
                Web3School is designed for dark mode
              </p>
            </div>
            <Switch checked disabled />
          </div>
        </div>
      </motion.section>

      <Separator className="bg-border" />

      {/* Account */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-purple-primary" />
          <h2 className="font-heading font-bold text-text-primary">Account</h2>
        </div>

        <div className="bg-navy-mid border border-border rounded-2xl p-6 space-y-4">
          <Button
            variant="outline"
            className="w-full border-border text-text-primary rounded-xl"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
          <Button
            variant="outline"
            className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-xl"
            disabled
            title="Contact support to delete your account"
          >
            Delete Account
          </Button>
          <p className="text-text-muted text-xs text-center">
            Contact support to delete your account and all data.
          </p>
        </div>
      </motion.section>

      {/* Save button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="sticky bottom-20 md:bottom-4 z-30"
      >
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className={cn(
            "w-full rounded-xl py-5 font-semibold shadow-lg transition-all",
            saved
              ? "bg-green-success hover:bg-green-success text-white"
              : "bg-purple-primary hover:bg-purple-light text-white"
          )}
        >
          {isSaving ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : saved ? (
            <Check className="w-4 h-4 mr-2" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          {isSaving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
        </Button>
      </motion.div>
    </div>
  );
}
