# Smart Waste

## Introduction

Welcome to `Smart Waste`: No waste with, Smart Waste! At Smart Waste, we pride ourselves on harnessing cutting-edge technology and leveraging valuable resources to empower New York City residents in conscious waste management. Our platform has been meticulously crafted using the wealth of data available through the OpenData NYC API, allowing us to provide real-time insights and solutions tailored to the unique needs of NYC neighborhoods.

With the power of OpenData NYC, we've developed a robust platform that enables users to make informed decisions about waste disposal, track local recycling programs, and engage in sustainable practices that benefit both the community and the environment.

## Initial Setup

### Setting up the front end:

1. **Fork the Repo**: Create a copy of this project's repository in your GitHub account.
1. **Clone the Fork**: Download your forked repository to your computer.
1. **Navigate to Directory**: Use command line to `cd` into the project folder.
1. **Install Dependencies**: Run `npm install` to set up project dependencies.
1. **Start Development Server**: Use `npm run dev` to launch the development environment.

## Persona

Emma is a dedicated urban planner with a passion for sustainability and environmental conservation. She has been living in Brooklyn for the past five years and is actively involved in community projects that promote green living and waste reduction. Emma has a Master's degree in Environmental Science and works for the NYC Department of City Planning. She is tech-savvy and uses various apps to enhance her day-to-day activities.

Emma logs into the Smart Waste website on a Sunday afternoon to plan her week. She has several items to dispose of, including old electronics, used batteries, and some yard waste. She navigates to the electronics category and finds a list of do's and don'ts, ensuring she properly prepares her items for disposal. Emma then uses the distance sorting feature to find the nearest drop-off site in Brooklyn. She notes the hours of operation and adds a visit to her calendar.

## Functionality

- We start on the landing page of Smart Waste, where we find an impactful video of one man cleaning what looks like an impossible amount of garbage.
- The side navbar can be toggled open or closed. It includes links to our different waste categories and links to our `About` page and `The Team`.
- Click on the `Learn more` or `About `button to learn more about **Smart Waste** or one of the categories in the side bar to get started.
- Each category in the side bar is color coded and matches each view of that category.
- Click on the `The Team` button to learn more about the devs who created Smart Waste.
- Once a category is clicked, the view changes to show information pertaining to that category: the dos and don'ts of what to bring to the waste site and a list of all the sites in nyc that take that are in the category.
- Click the `Sort by distance button` to sort the sites from nearest to farthest from the user.

## Wireframes

[Smart Waste Wireframes](https://excalidraw.com/#json=9uvPwZSuCJFyakIvh7Ux8,wmhpVJ-HcMUuNXZj722tyA)

## Extras

- TailWind and CSS were used to design Smart Waste
- Geolib was used to get the distance between a the user's current position and the waste sites, and then sorted from nearest to farthest. Clicking on the `Sort by distance` button will trigger this function.
- An _About_ view was added with Smart Waste's mission statement
- An _About the Team_ view was added.
- Cloudinary was used to store images for our app.
