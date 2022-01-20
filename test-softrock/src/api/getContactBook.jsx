import axios from 'axios';

const getContactBook = () => {
    return axios("contactbook.json")
}

export default getContactBook;