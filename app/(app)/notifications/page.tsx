/**
 * @component NotificationsPage
 * @part-of Web3School — Notifications
 * @design All nudges list with mark-as-read, categories, timestamps
 */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Loader2,
  Flame,
  Star,
  Trophy,
  Sparkles,
  Bell,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getGuestNotifications } from "@/lib/guest/demo-data";
import { useGuestStore } from "@/lib/guest/store";
import { useUser } from "@/lib/hooks/useUser";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

const TYPE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  streak_reminder: Flame,
  celebration: Sparkles,
  milestone: Trophy,
  tip: Star,
  comeback: Bell,
  challenge: Star,
};

const TYPE_COLORS: Record<string, string> = {
  streak_reminder: "text-amber-warning",
  celebration: "text-purple-primary",
  milestone: "text-cyan-accent",
  tip: "text-green-success",
  comeback: "text-amber-warning",
  challenge: "text-purple-primary",
};

function formatTimeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHrs = Math.floor(diffMins / 60);
  if (diffHrs < 24) return `${diffHrs}h ago`;
  const diffDays = Math.floor(diffHrs / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function NotificationsPage() {
  const { isGuest } = useUser();
  const readNotificationIds = useGuestStore((state) => state.readNotificationIds);
  const markAllGuestNotificationsRead = useGuestStore(
    (state) => state.markAllNotificationsRead
  );
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isGuest) {
      setNotifications(getGuestNotifications(readNotificationIds));
      setIsLoading(false);
      return;
    }

    const fetchNotifications = async () => {
      try {
        const res = await fetch("/api/notifications");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setNotifications(data.notifications || []);
      } catch (err) {
        console.error("Notifications fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, [isGuest, readNotificationIds]);

  const markAllRead = async () => {
    try {
      if (isGuest) {
        markAllGuestNotificationsRead();
        setNotifications((prev) =>
          prev.map((notification) => ({ ...notification, is_read: true }))
        );
        return;
      }

      await fetch("/api/notifications/read", { method: "POST" });
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, is_read: true }))
      );
    } catch (err) {
      console.error("Mark read error:", err);
    }
  };

  const unreadCount = notifications.filter((n) => !n.is_read).length;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-purple-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading font-bold text-text-primary text-lg">
            Notifications
          </h2>
          {unreadCount > 0 && (
            <p className="text-text-muted text-xs">
              {unreadCount} unread
            </p>
          )}
        </div>
        {unreadCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={markAllRead}
            className="text-purple-primary text-xs"
          >
            <Check className="w-3 h-3 mr-1" />
            Mark all read
          </Button>
        )}
      </div>

      {/* Empty state */}
      {notifications.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <Bell className="w-10 h-10 text-text-muted mx-auto" />
          <p className="text-text-secondary">No notifications yet.</p>
          <p className="text-text-muted text-sm">
            Streak reminders, celebrations, and tips will appear here.
          </p>
        </div>
      )}

      {/* Notification list */}
      <div className="space-y-2">
        {notifications.map((notif, i) => {
          const Icon = TYPE_ICONS[notif.type] || Bell;
          const iconColor = TYPE_COLORS[notif.type] || "text-text-muted";

          return (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className={cn(
                "flex items-start gap-3 p-4 rounded-xl border transition-colors",
                notif.is_read
                  ? "bg-navy-mid/50 border-border/50"
                  : "bg-navy-mid border-border"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5",
                  notif.is_read ? "bg-navy-deep/50" : "bg-navy-deep"
                )}
              >
                <Icon className={cn("w-4 h-4", iconColor)} />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "text-sm font-medium",
                    notif.is_read ? "text-text-muted" : "text-text-primary"
                  )}
                >
                  {notif.title}
                </p>
                <p className="text-text-muted text-xs mt-0.5">
                  {notif.message}
                </p>
              </div>
              <span className="text-text-muted text-[10px] flex-shrink-0">
                {formatTimeAgo(notif.created_at)}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
