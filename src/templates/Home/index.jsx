
import './styles.css';
import{Component} from "react"
import {PostCard} from '../../components/PostCard';
import {loadPosts} from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {

  state = {
      post:[],
    allPosts:[],
    page:0,
    postPerPage:10,
    searchValue:'',
  }

  async componentDidMount(){
    await this.loadPost();
  
  }

 


  render(){
    const {post,page,postPerPage,allPosts,searchValue}=this.state   
    const noMorePost=page+postPerPage>=allPosts.length
    const filteredPosts= !!searchValue ? 
    allPosts.filter(p=>{
      return p.title.toUpperCase().includes(searchValue.toUpperCase());
    })
    :post;


  return (
    <section className="container">
      <TextInput searchValue={searchValue} handleChange={this.handleChange}/>

    

      {filteredPosts.length > 0 &&(
      <div className="posts">
        {filteredPosts.map(filteredPosts=>(
          <PostCard post={filteredPosts} key={filteredPosts.id}/>
        ))}
      </div>
      )}
      {filteredPosts.length === 0 &&(
        <p>no post with :<b>{searchValue}</b></p>
      )}
      
     
   
    {!searchValue&&(
      <Button text="load more posts" onClick={this.loadMorePost} disabled={noMorePost}/>
    )}
    
    </section>
  );
  }

  //functions
  loadPost=async()=>{
    const{page,postPerPage}=this.state
    const fullPosts= await loadPosts();
    this.setState({      
      post:fullPosts.slice(page,postPerPage),
      allPosts:fullPosts,
    })

  }


  loadMorePost=()=>{

    const {
      post,
      allPosts,
      page,
      postPerPage
    }=this.state;
    const nextPage=page+postPerPage;
    const nextPost=allPosts.slice(nextPage,nextPage+postPerPage);   
    post.push(...nextPost);
    console.log(allPosts)
    this.setState({post,page:nextPage});
    
  }

  handleChange=(e)=>{
    const {value}=e.target
    this.setState({searchValue:value})


  }
}


