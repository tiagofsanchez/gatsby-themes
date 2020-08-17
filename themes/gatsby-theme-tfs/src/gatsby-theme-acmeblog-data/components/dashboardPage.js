import React from "react";
import DashboardPage from "../../components/pages/dashboardPage";

const MinBlogPost = ({ data }) => {
  const { postsArray , catGroup} = data;

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

  let gardenCatStats = [];
  catGroup.group.map(cat => { 
      gardenCatStats.push({
          name: cat.fieldValue, 
          value: cat.totalCount  
      })
      return gardenCatStats
  })  

  return <DashboardPage data={{ data, gardenOverallStats, gardenCatStats }} />;
};

export default MinBlogPost;
