type WebSocketMessage = {
  type: "position" | "disconnect";
  icarPosition?: {
    id: number;
    name?: string;
    position?: Coordinate;
  };
  ticketsProximity?: {
    ticketId: number;
    distance: number;
  }[];
  canceledTickets?: number;
};
