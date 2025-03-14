export interface Session {
  sessionID: string;
  email: string;
  nickname: string;
  createdAt: string;
  lastAccess: string;
  status: string;
  clientData: {
    ip: string;
    macAddress: string;
  };
  serverData: {
    ip: string;
    macAddress: string;
  };
  inactivityTime: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  durationTime: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}
