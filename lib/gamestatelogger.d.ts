export declare class gameStateLogger {
  constructor(eventlog: object[], flushSize: number)

  logKeyDownEvent(event: string, time: number, points: number): void
  logClickEvent(event: string, location: string | { x: number; y: number }, time: number, points: number): void
  logNewLevel(newlevel: number, time: number, points: number): void
  logGameOver(event: string, time: number, points: number, highscore: number): void
  logGameEnd(event: string, time: number, points: number, highscore: number): void
  postData(): void
}