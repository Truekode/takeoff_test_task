import axios from "axios";

export const getAuthorization = async (login: string): Promise<any[]> => {
    let authorization: any[] = [false, login]
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    response.data.map((item: {
        name: string;
        email: string;
        username: string; }) => {
        if (item.username === login || item.email === login) {
            authorization = [true, item.name]
        }
    })

    return authorization;
}