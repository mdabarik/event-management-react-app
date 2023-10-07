
import ImageBlog from "../../assets/blog-bg.jpg";
import BgImage from "../BgImage/BgImage";

const BlogBanner = () => {
    return (
        <div>
            <BgImage isFull={false} image={ImageBlog}></BgImage>
        </div>
    );
};

export default BlogBanner;