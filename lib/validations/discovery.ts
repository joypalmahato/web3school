import { z } from "zod/v4";

export const discoveryMessageSchema = z.object({
  message: z.string().min(1, "Message cannot be empty").max(2000, "Message is too long"),
  session_id: z.string().uuid().optional(),
  conversation_history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      })
    )
    .optional(),
});

export type DiscoveryMessageData = z.infer<typeof discoveryMessageSchema>;

export const discoveryCompleteSchema = z.object({
  session_id: z.string().uuid(),
  conversation_history: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string(),
    })
  ),
});

export type DiscoveryCompleteData = z.infer<typeof discoveryCompleteSchema>;
