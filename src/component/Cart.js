import '../styles/Cart.css'

export default function Cart(){
    const MoteraPrix = 8;
    const LierrePrix = 10;
    const FleursPrix = 15;
    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                <il>Monstera : {MoteraPrix}$</il><br/>
                <il>Lierre : {LierrePrix}$</il><br/>
                <il>Fleurs : {FleursPrix}$</il>
            </ul>
            <p>Total : {MoteraPrix + LierrePrix + FleursPrix}$</p>
        </div>
    )
}