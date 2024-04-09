function StatusComponent() {
   
    return (
        <footer className="stats">
            <em>You have {2} {2>1?"items":"item"} on your List, and You already Packed {2} ({1>0?(2/1).toFixed(2)*100:"0"}%)</em>   
        </footer>
    )
}

export default StatusComponent
