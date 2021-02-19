import React from 'react';
import styles from '../../pages/student-innovators-toolbox/student-innovators-toolbox.module.scss';

export default {
	title: 'RESOURCES',
	introSentence: <></>,
	data: [
		{
			accordionTitles: [<>User-Centered Design Principles</>],
			accordionContent: [
				<p className={styles.bold}>
					While each user-centered design (UCD) process can look different for every
					team, there are four main stages to every UCD approach.
				</p>,
				<ul>
					<li>
						Observe and learn about the people for whom you are solving a problem.
					</li>
					<li>
						Ideate or generate ideas about potential options that could address the
						challenge your target audience faces.
					</li>
					<li>Create or make a prototype.</li>
					<li>
						Check or test the chosen prototype to see if it actually solves the
						problem people are facing.
					</li>
				</ul>,
				<p>
					In reality, however, UCD is an incredibly iterative process—the stages do
					not flow linearly from one to the next. You may begin brainstorming and
					realize you need more information, returning your team back to the
					observation and learning stage. You may build a prototype, test it, and
					find out it doesn’t quite work, sending you back to the ideation phase.
				</p>,
				<p>
					<span className={styles.bold}>
						The ultimate purpose of UCD when tackling any challenge is to keep your
						target audience first and foremost to any solution – how would they
						naturally navigate a situation or interact with something? – and build for
						them.{' '}
					</span>
					The prototype should cater to the people facing the challenge, not the
					other way around; if you build a grand solution that no one will use, you
					don’t have a solution at all.
				</p>,

				<p>
					<span className={styles.bold}>
						The benefits of employing a user-centered design approach are numerous.{' '}
					</span>
					The solution is much more likely to be effective and adopted by the target
					audience when it was built from the ground up with them in mind and tested
					throughout multiple phases. UCD can also reduce risk by allowing for quick,
					iterative stages that are nimble enough to make changes as new information
					is acquired and incorporated. Surprises are limited in the final release of
					the solution given the rounds of testing of the various prototypes
					throughout the lifecycle of the project. Once an idea moves into a
					higher-fidelity phase (e.g., a mock up that looks exactly how the phone app
					will be developed), resources (time, money, etc.) can be spent more
					confidently and wisely, knowing that quirks have been ironed out and
					unknown issues have been discovered and addressed earlier (e.g., with paper
					prototypes).
				</p>,
				<p>
					<span className={styles.bold}>
						We encourage teams that we partner with to adopt this approach.{' '}
					</span>
					Once a team identifies the target audience or who may be impacted by the
					project, we want students to go out and observe or interview people to
					gather and test the initial data. Later, once ideas have been generated and
					a prototype has been created, students should test the concept before
					switching fully into implementation mode. How would they use the project?
					What do they expect each thing to do? Now that they have something to react
					to, are there other issues they foresee? Incorporate the users’ feedback
					into any final solution or prototype.
				</p>,
			],
		},
		{
			accordionTitles: [<>Tips to finding your client</>],
			accordionContent: [
				<p>
					In a client-based project, students analyze a policy problem, a challenge
					or missed opportunity and – with faculty guidance – develop recommendations
					to address it. Hence, a client with an interesting problem is key to
					producing a successful product or analysis.
				</p>,
				<p>
					But finding a client and a policy problem can be challenging. Here are a
					few tips to begin this essential first step of your product or analysis:
				</p>,
				<div className={styles.textIndent}>
					<p>
						<span className={styles.bold}>Follow your interests. </span>Connect with
						an organization working on problems you’re interested in. For example, a
						local homeless service organization might be an appropriate client for
						students interested in preventing and ending homelessness or alleviating
						poverty. Learn about the organization’s goals and current initiatives.
						Then, work with the client to define a suitable and manageable policy
						problem or analysis that can provide value or insights to them.
					</p>
					<p>
						<span className={styles.bold}>Leverage your network. </span>Reach out to
						your alumni and faculty networks and get an introduction to the problems
						and challenges their respective organizations are facing. Then, conduct
						initial research and identify an opportunity for a client organization.
					</p>
					<p>
						<span className={styles.bold}>Think local. </span>Consider
						organizations/agencies you’re familiar with. These can be your high
						school, your city council, nonprofits in your community, or other small,
						public organizations where you may have a connection. Most of these
						organizations would be happy to have students completing a master’s degree
						to help increase understanding of the distribution of federal funds and
						their impact.
					</p>
					<p>
						<span className={styles.bold}>Develop your subject matter niche. </span>
						Take advantage of your student status and contact professionals on social
						media, via email or phone! Consider policy issues or topics in your field
						of study and share interesting insights or ideas. Next, meet with them and
						ask if they have a project that you can conduct for them to complete your
						master’s degree. You should bring some examples of project ideas that you
						have, too.
					</p>
				</div>,
			],
		},
		{
			accordionTitles: [<>Client-Based Project Opportunities</>],
			accordionContent: [
				<p>
					<span className={styles.bold}>You + Data = Impact. </span>By utilizing
					data, you can unlock valuable insights that empower agencies, nonprofit,
					and public organizations to make evidence-based decisions that positively
					impact our communities. Stay tuned for unique opportunities to get involved
					and make a difference.
				</p>,
			],
		},
		{
			accordionTitles: [<>Challenge.gov</>],
			accordionContent: [
				<p>
					Look for additional ideas and incentives in challenge and prize
					competitions within government, universities or data science organizations.
				</p>,
			],
		},
		{
			accordionTitles: [<>Tech Meetups</>],
			accordionContent: [
				<p>
					Join professionals, students and others in your local area to share ideas
					or build a team.
				</p>,
			],
		},
		{
			accordionTitles: [<>Data Sets</>],
			accordionContent: [
				<p>
					<span className={styles.bold}>
						USAspending.gov Downloadable Data Sets:{' '}
					</span>
					Are you interested in creating a data visualization to answer questions
					like “How much does the federal government spend to combat the opioid
					crisis?”, or to learn how much is spent on border security, housing, or
					violence against women? Check out our{' '}
					<a
						href="https://registry.opendata.aws/usaspending/"
						target="_blank"
						rel="noopener noreferrer">
						USAspending.gov
					</a>{' '}
					database to get started!
				</p>,
				<p>
					<span className={styles.bold}>Clean Data Sets (Option 1): </span>For
					analysis and data visualization projects - Coming soon
				</p>,
				<p>
					<span className={styles.bold}>Raw Data Sets (Option 2): </span>For data
					cleaning projects - Coming soon
				</p>,
			],
		},
	],
};
