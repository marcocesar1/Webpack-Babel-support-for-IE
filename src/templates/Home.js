import getUsers from '../services/getUsers';
import Card from './Card';

export default async function(){
    let template = '';
    try{
        const users = await getUsers();
        users.forEach(user => {
            template += Card({...user});
        });
    }catch(err){
        alert('Ocurrio un error al obtener la información');
    }
    return template;
}