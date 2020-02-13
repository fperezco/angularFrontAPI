export interface Video{
    id: BigInteger;
    user_id: BigInteger;
    videocategory_id: BigInteger;
    name: string;
    url: string;
    picture: string;
    description: string;
}

export interface Respuesta{
    data: string[];
}