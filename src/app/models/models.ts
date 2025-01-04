export interface SignupInterface {
    "id": string,
    "name": string,
    "email": string,
    "password": string
}

export interface LoginInterface {
    "email": string,
    "password": string
}

export interface productInterface {
    addProdctData(data: productInterface): unknown
    "p_name": string,
    "p_price": number,
    "p_category": string,
    "p_color": string,
    "p_description": string,
    "img_url": string
}