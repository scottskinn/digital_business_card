import profile from "../images/profile.png"
export default function Header() {
    return (
        <div className="header">
            <img src={profile} className="profile" />
            <h1>Scott Skinn</h1>
            <h4>Frontend Developer</h4>
            <a href="http://scott2n.pythonanywhere.com/" className="my_website" target={"_blank"}>My Website</a>
        </div>
    )
}
