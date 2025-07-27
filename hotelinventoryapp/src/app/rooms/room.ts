export interface Room {
    total: number;
    quartosdisponiveis : number;
    quartosreservado : number;
} 

export interface RoomList{
    numero : number;
    tipo : string;
    preco : number;
    cortesias : string;
    photos: string;
    checkin: Date;
    checkout: Date;
}