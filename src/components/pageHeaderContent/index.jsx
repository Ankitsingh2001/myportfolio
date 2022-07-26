import './style.scss'


const PageHeaderContent = (props)=>{
    // const {headerText , icon} =props;

    return(
        <div className="wraper">
             <h2>{props.headerText}</h2>
             <span>{props.icon}</span>
        </div>
    )
}
export default PageHeaderContent;