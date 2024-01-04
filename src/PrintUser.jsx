const PrintUser = ({user, fetchData}) => {
    return(
    <>
        <div className="container">
        <img src={user.avatar_url} alt=""/>
        <h1>{user.name}</h1>
        <h3>Web Developer - Web Designer</h3>
        <p>{user.bio}</p>
<div className="links">
    <i className="fa-brands fa-square-facebook"></i>
    <i className="fa-brands fa-square-twitter"></i>
    <i className="fa-brands fa-square-google-plus"></i>
</div>
</div>
    </>
    )
  }

export default PrintUser