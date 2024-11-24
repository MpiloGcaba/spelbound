import { ConnectionStatus } from "./ConnectionStatus";

interface SliceNetworkStage<T>{
    data: T;
    status: ConnectionStatus;
    error: string | null;
}