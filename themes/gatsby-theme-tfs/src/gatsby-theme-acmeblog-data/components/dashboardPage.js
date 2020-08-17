import React from "react";
import DashboardPage from "../../components/pages/dashboardPage";
import moment from "moment";

const MinBlogPost = ({ data }) => {
  const { postsArray, catGroup, tagGroup } = data;

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
  catGroup.group.map((cat) => {
    gardenCatStats.push({
      name: cat.fieldValue,
      value: cat.totalCount,
    });
    return gardenCatStats;
  });

  let datesArray = [];
  postsArray.nodes.map((post) => {
    const month = moment(post.frontmatter.date).format("MMMM[-]YYYY");
    if (datesArray.length === 0) {
      datesArray.push({
        name: month,
        pv: 0,
      });
    }
    datesArray.map((item, index) => {
      if (month=== item.name) {
        console.log(index);
        datesArray[index].pv = datesArray[index].pv + 1;
      } else if (month !== item.name) {
        datesArray.push({
          name: month,
          pv: 1,
        });
      }
    });
    return datesArray;
  });

  console.log(datesArray);

  const gardenFrequency = [
    { name: "Jan", pv: 2400 },
    { name: "Feb", pv: 2400 },
    { name: "Mar", pv: 2400 },
    { name: "April", pv: 2400 },
    { name: "May", pv: 2400 },
    { name: "Jun", pv: 2400 },
    { name: "July", pv: 2400 },
    { name: "Aug", pv: 2400 },
    { name: "Sept", pv: 2400 },
    { name: "Oct", pv: 3000 },
    { name: "Nov", pv: 2400 },
    { name: "Dec", pv: 2400 },
  ];

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
