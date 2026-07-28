// import { getUserSession } from "@/lib/core/session";


import PostTaskForm from "@/components/dashboard/client/PostTaskForm";

const PostTaskPage = () => {
    // const user = getUserSession();
    // console.log("User session in PostTaskPage:", user);

    return (
        <div>
            <PostTaskForm></PostTaskForm>
        </div>
    );
};

export default PostTaskPage;