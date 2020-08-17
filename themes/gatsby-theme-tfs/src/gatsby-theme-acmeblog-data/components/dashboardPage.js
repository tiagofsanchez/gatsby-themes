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
      name: cat.fieldValue,
      value: cat.totalCount,
    });
    return gardenCatStats;
  });

  //FREQUENCY
  let datesArray = [];
  postsArray.nodes.map((post) => {
    datesArray.push(moment(post.frontmatter.date).format("MMM[/]YY"));
    return datesArray;
  });

  let gardenFrequency = [
    { name: "Jan/20", pv: 0 },
    { name: "Feb/20", pv: 0 },
    { name: "Mar/20", pv: 0 },
    { name: "Apr/20", pv: 0 },
    { name: "May/20", pv: 0 },
    { name: "Jun/20", pv: 0 },
    { name: "Jul/20", pv: 0 },
    { name: "Aug/20", pv: 0 },
    { name: "Sep/20", pv: 0 },
    { name: "Oct/20", pv: 0 },
    { name: "Nov/20", pv: 0 },
    { name: "Dec/20", pv: 0 },
  ];

  gardenFrequency.map((item, index) => { 
    return datesArray.map(date => { 
      if (date === item.name) {
        gardenFrequency[index].pv = gardenFrequency[index].pv + 1
      }
      return gardenFrequency
    })
  })

  const gardenTags = tagGroup.group;

  return (
    <DashboardPage
      data={{
        data,
        gardenOverallStats,
        gardenCatStats,
        gardenFrequency,
        gardenTags,
      }}
    />
  );
};

export default MinBlogPost;
