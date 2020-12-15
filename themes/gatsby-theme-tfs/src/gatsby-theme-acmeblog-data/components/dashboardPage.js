import React from "react";
import DashboardPage from "../../components/pages/dashboardPage";
import moment from "moment";

const MinBlogPost = ({ data }) => {
  const { postsArray, catGroup, tagGroup } = data;

  //GENERAL STATS
  let gardenOverallStats = {};
  const totalPosts = postsArray.nodes.length;
  let totalMin = 0;
  let totalWords = 0;
  postsArray.nodes.map((post) => {
    totalMin = post.fields.readingTime.minutes + totalMin;
    totalWords = post.fields.readingTime.words + totalWords;
    return { totalWords, totalMin };
  });
  const totalMinRead = `${new Intl.NumberFormat().format(
    Math.round(totalMin)
  )} min read`;
  const totalNumWords = `${new Intl.NumberFormat().format(totalWords)} words`;
  gardenOverallStats = { totalPosts, totalMinRead, totalNumWords };

  //CATEGORIES
  let gardenCatStats = [];
  catGroup.group.map((cat) => {
    gardenCatStats.push({
      x: cat.fieldValue,
      y: cat.totalCount,
    });
    return gardenCatStats;
  });

  //FREQUENCY
  let gardenPosts = [];
  postsArray.nodes.map((post) => {
    gardenPosts.push(moment(post.frontmatter.date).format("MMM[/]YY"));
    return gardenPosts;
  });

  const gardenTags = tagGroup.group;

  return (
    <DashboardPage
      data={{
        data,
        gardenOverallStats,
        gardenCatStats,
        gardenPosts,
        gardenTags,
      }}
    />
  );
};

export default MinBlogPost;
