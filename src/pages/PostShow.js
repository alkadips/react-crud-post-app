import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Layout from "../components/Layout"


function PostShow() {
    const [id, setId] = useState(useParams().id)
    const [post, setPost] = useState({ name: '', description: '' })

    const axiosInstance = axios.create({
        baseURL: 'https://mock-api.binaryboxtuts.com/',
    });

    useEffect(() => {
        axiosInstance.get(`/api/projects/${id}`)
            .then(function (response) {
                setPost(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Show Post</h2>
                <div className="card">
                    <div className="card-header">
                        <Link
                            className="btn btn-outline-info float-right"
                            to="/dashboard"> View All Post
                        </Link>
                    </div>
                    <div className="card-body">
                        <b className="text-muted">Name:</b>
                        <p>{post.name}</p>
                        <b className="text-muted">Description:</b>
                        <p>{post.description}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PostShow;