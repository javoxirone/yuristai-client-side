// eslint-disable-next-line react/prop-types
const PageTitle = ({title}) => {
    return (
        <div className="position-absolute py-3" style={{top: 0, left: 0}}>
            <h3 className="text-white">{title}</h3>
        </div>
    )
}
export default PageTitle;