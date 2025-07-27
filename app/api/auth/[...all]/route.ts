import { auth } from '@/lib/auth';
import ip from '@arcjet/ip';
import arcjet, {
  type ArcjetDecision,
  type BotOptions,
  type EmailOptions,
  type ProtectSignupOptions,
  type SlidingWindowRateLimitOptions,
  detectBot,
  protectSignup,
  shield,
  slidingWindow,
} from '@arcjet/next';

import { toNextJsHandler } from 'better-auth/next-js';

const emailOptions = {
  mode: 'LIVE',
  block: ['DISPOSABLE', 'INVALID', 'NO_MX_RECORDS'],
} satisfies EmailOptions;

const botOptions = {
  mode: 'LIVE',
  allow: [],
} satisfies BotOptions;

const rateLimitOptions = {
  mode: 'LIVE',
  interval: '2m',
  max: 5,
} satisfies SlidingWindowRateLimitOptions<[]>;

export const { POST, GET } = toNextJsHandler(auth);
