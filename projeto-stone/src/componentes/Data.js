import style from './data.module.css';
import moment from 'moment';

function Data(){
    let arr = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    let dia = new Date().getDate();
    let mes = new Date().getMonth();
    let ano = new Date().getFullYear();
    let date = moment().utcOffset('-03:00').format("HH:mm");
    return(
        <div className={style.data}>
            <p className={style.primeirop}>{dia} de {arr[mes]} {ano} | {date} UTC</p>
            <p className={style.segundop}>Dados de câmbio disponibilizados pela Morningstar.</p>
        </div>
    )
}

export default Data