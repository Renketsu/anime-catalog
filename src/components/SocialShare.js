import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const SocialShare = ({ url, title }) => {
  return (
    <div>
      <h3>Share this anime</h3>
      <FacebookShareButton url={url} quote={title}>
        Share on Facebook
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        Share on Twitter
      </TwitterShareButton>
    </div>
  );
};

export default SocialShare;
