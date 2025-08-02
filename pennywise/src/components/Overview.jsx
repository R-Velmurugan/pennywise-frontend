export default function Overview() {
    let expenses = 200.40;
    let income = 500.00;
    return <section>
        <ul className="flex my-10 justify-around" >
            <li><Card title={"Expenses this month"} amount={expenses} color="bg-[#EDEAFD]"/></li>
            <li><Card title={"Income this month"} amount={income} color="bg-[#FFF3FC]"/></li>
            <li><Card title={"Savings this month"} amount={income-expenses} color="bg-[#F4F4FC]"/></li>
        </ul>
    </section>
}
const Card = ({title , amount , color}) => {
    let currency = '₹'
    return <div className={`p-4 rounded-2xl ${color}`} >
        <p className='text-[10px]' >{title}</p>
        <h3>{`${currency} ${amount}`}</h3>
    </div>
}