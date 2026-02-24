//  Each notification should have a title, message, timestamp, 
// and severity level (info, warning, error, success)

// Which props are required vs. optional?
// What types should severity levels use? (Hint: union types)
// How should you type the action buttons array? 
// What type should the onDismiss callback use?

// interface NotificationCardProps {
//     title: string;
//     message: string;
//     timestamp: Date;
//     severity: 'info' | 'warning' | 'error' | 'success'; 
//     onDismiss: () => void;
// }

/** Represents an action button that can be displayed in a notification */
interface NotificationAction {
  /** The label text displayed on the button */
  label: string;
  /** Callback function triggered when the action button is clicked */
  onClick: () => void;
}

/** Props for the NotificationCard component */
interface NotificationCardProps {
  /** The title of the notification - displayed prominently at the top */
  title: string;

  /** The main message content of the notification */
  message: string;

  /** The timestamp when the notification was created */
  timestamp: Date;

  /** The severity level of the notification, determines styling and urgency */
  severity: 'info' | 'warning' | 'error' | 'success';

  /** Callback function triggered when the user dismisses the notification */
  onDismiss: () => void;

  /** Optional array of action buttons displayed in the notification footer */
  actionButtons?: NotificationAction[];

  /** Optional icon to display alongside the notification title (ReactNode for flexibility) */
  icon?: React.ReactNode;

  /** Optional number of seconds after which the notification auto-dismisses (0 or undefined = no auto-dismiss) */
  autoDismissSeconds?: number;
}