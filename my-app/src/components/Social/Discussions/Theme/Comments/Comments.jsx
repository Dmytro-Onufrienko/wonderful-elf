import classes from './Comments.module.css';
import Comment from "./Comment/Comment";
import Add_comment from "./Add_comment";


const Comments = (props) => {
    let comments = (props.comments_data.slice(0).reverse())
        .map(comment => (<Comment img={comment.img} text={comment.text}/>))
    return (
        <div className={classes.content_item}>
            <p className={classes.line}>Comments</p>
            <Add_comment
                discussion_theme={props.discussion_theme}
                placeholder={props.placeholder}
                update_textarea={props.update_textarea}
                add_comment={props.add_comment}
            />
            <div>
                {comments}
            </div>
        </div>
    )
}

export default Comments