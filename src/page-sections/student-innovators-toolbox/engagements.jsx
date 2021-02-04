import React from 'react';

export default {
	title: 'TYPES OF ENGAGEMENTS',
	introSentence: (
		<p>
			We offer three main ways for students and faculty to connect with us. We will
			keep this list dynamic and growing so let us know if you have suggestions for
			other types of engagement that better fits your needs.
		</p>
	),
	data: [
		{
			accordionTitles: [<>Use the data to learn about something else</>],
			accordionContent: [
				<p>
					Quantitative courses at every level require datasets for classroom lessons,
					homework, problem sets, exams, and more. Courses we believe are a good fit
					for our data include those that focus on probability, statistics,
					econometrics, economics, federal budgeting, and data science.
				</p>,
				<p>
					There are two high-level options of USAspending.gov datasets: (1) a
					prepared, clean dataset and (2) a real-world, raw dataset. Below we explain
					what we mean by clean and raw, as well as the circumstances that call for
					each. Both options involve students using Python, R, Stata, SAS, Excel, or
					some other software to analyze (or clean then analyze) the data.
				</p>,
				<h1>Clean dataset</h1>,
				<p>
					A prepared and clean dataset is easier to use out of the gate because it is
					smaller and requires no data cleaning or data wrangling on the student’s
					part. That is, the data is in the desired format/shape to begin the desired
					analysis immediately. There are no missing or duplicate values, and the
					dataset contains a limited number of fields/columns. Prepared and clean
					datasets are best for teaching other concepts (e.g. regression analysis)
					when and you don’t want to overwhelm the student with the pre-cleaning
					steps. They’re also helpful for analysis and data visualization projects.
				</p>,
				<h1>Raw dataset</h1>,
				<p>
					In more advanced classes, the goal is to help the student understand how
					data will actually look when they first get it. This may require teaching
					the student how to handle missing values or de-duplicate records. Often
					original owners of data have it structured in a way to serve their own
					business purposes, so the student may be required to change the shape of
					the data entirely in a processing stage before they can begin any analysis.
					These types of data sets are useful for students learning data wrangling,
					data cleaning techniques; those learning more “real-world” data handling
					skills in order to prep datasets before they apply statistical techniques,
					or prior to learning different languages typical to data science, e.g. R or
					Python.
				</p>,
			],
		},
		{
			accordionTitles: [
				<>Use the data to learn about federal budgeting and/or federal spending</>,
			],
			accordionContent: [
				<p>
					While the engagement above focuses on learning skills related to data and
					analysis, the courses mentioned are often agnostic to the actual content of
					the dataset. A second option is to use USAspending data to specifically
					focus its content for courses touching on federal budgeting or federal
					spending processes. Programs interested in federal government data may
					include both undergraduate and graduate levels for finance, accounting,
					public administration, public policy, or business schools.
				</p>,
				<p>
					Similar to above, this engagement includes two options: a prepared, clean
					dataset or “real-world” raw dataset that requires cleaning and preparation
					prior to consumption.
				</p>,
				<h1>Option 1) Clean dataset</h1>,
				<p>See Engagement 1, Option 1</p>,
				<h1>Option 2) Raw dataset</h1>,
				<p>See Engagement 2, Option 2</p>,
			],
		},
		{
			accordionTitles: [
				<>
					Use the data for a consulting or capstone project (given a problem
					statement or question)
				</>,
			],
			accordionContent: [
				<p>
					In this engagement, a student or student team uses data from
					USAspending.gov to identify a real-world question to answer. Using the
					principles of user-centered design as outlined in the Resources section,
					the student team identifies a “client”, and the student or team acts as
					analysts or consultants. The student team conducts initial interviews with
					the client to determine how USAspending.gov data can help answer a question
					or solve a problem, and the student team then researches, performs
					analysis, and provides recommendations in order to answer the question or
					advise a particular course of action. While this type of structure is
					common for public policy students, it can easily be applied to a wide
					variety of settings ranging from business to data science students, or even
					an interdisciplinary team where a “real-world” project is the goal (e.g.
					student associations, clubs).
				</p>,
				<p>
					The student team can decide, in consultation with their “client”, to
					produce a product or visualization instead of an analysis or
					recommendation. The focus would be less about gathering data to answer a
					specific question and providing a recommendation, and more about creating a
					product, tool, visualization for the Data Lab’s website and portfolio.
					Students with a wide range of backgrounds including, quantitative analysis,
					graphic design, UX, UI, design, data visualization, data science, computer
					science, and more can contribute to this type of engagement. Examples of
					software/languages used for executing tasks or analysis in this engagement
					are: Tableau, R and R Shiny, Python, Stata, JavaScript, HTML, CSS, D3, and
					React.
				</p>,
			],
		},
	],
};
