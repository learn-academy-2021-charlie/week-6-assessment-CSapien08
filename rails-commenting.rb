# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This defines the controller class for Blog Posts
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #Declares the instance variable posts that will have all information that holds all of tables data to display
    #holds an active record query of the array of all the db instances.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    #Declares the instance variable post, that holds an active record query to find a specific blog post based on id.
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #Creates the new method, used to display a form to create a new entry in the database.
  def new
    @post = Post.new
  end

  def create
    # ---5)
    #Creates an instance variable post, that has an acitve record query to create a new blog post, is passed strong params, uses the data generated from the form that new uses.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  #Creates the method edit and it will route to an HTML page that has a form to update a post.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #Declares an instance variable post to update the Blog Post based on the infromation from the edit page. passed the strong params method call.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      #This will redirect you to the post the user was trying to delete
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  #This is private method, that means that blog_post_params can only be called within this class.
  private
  def blog_post_params
    # ---10)
    #Allows only the title and content columns to be created/updated
    params.require(:blog_post).permit(:title, :content)
  end
end
