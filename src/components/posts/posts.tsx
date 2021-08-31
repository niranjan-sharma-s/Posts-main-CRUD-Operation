import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IPostState } from "../../store/reducers/getUser";
import { downloadPostsAction } from "../../store/actions/actionCreators";
import "./posts.scss";
import { Icon } from 'semantic-ui-react'
import { SinglePost } from "./../singlePost/SinglePost";
import Pagination from "../pagination/pagination";
import AddPost from "../addpost/addpost";

export function Posts() {
  const { posts, loading, error } = useSelector(
    ({ reducer }: { reducer: IPostState }) => ({
      posts: reducer.posts,
      loading: reducer.loading,
      error: reducer.error,
    })
  );

  useEffect(() => {
    downloadPostsAction();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    posts &&
    posts.length > 0 &&
    posts?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const spinner = (): JSX.Element => {
    //TODO: replace text with .svg spinner
    return (
      <div className="spinner">
        <Icon loading name='spinner' />
      </div>
    );
  };

  const errorMsg = (): JSX.Element => {
    //TODO: Display toast from sweetalert2
    return <div className="error">{error}</div>;
  };

  return (
    <div className="main">
      {<AddPost />}
      <div className="container">
        {loading && spinner()}
        {error && errorMsg()}
        {currentPosts &&
          currentPosts?.length > 0 &&
          currentPosts.map((post) => <SinglePost {...post} key={post.id} />)}
        {posts && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
}
