export default function Friend({friend}){
    const {name,email} = friend;
     const style2={
        border: '1px solid red'
    }
    return(
        <div style={style2}>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
        </div>
    )
}