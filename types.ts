export interface NavItem {
  id: string;
  label: string;
  isActive?: boolean;
}

export interface CalendarDay {
  day: number;
  isCurrentMonth: boolean;
  hasEvent?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: Date;
}

export enum TechVariant {
  DEFAULT = 'default',
  WARNING = 'warning',
  DANGER = 'danger',
}