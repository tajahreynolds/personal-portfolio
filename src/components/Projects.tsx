import type { PropsWithChildren } from "hono/jsx";
import type { HtmlEscapedString } from "hono/utils/html";
import disboundIcon from "../../static/icons/disbound-icon";
export default function() {
    return (
			<div id="projects">
				<Project title="Disbound" icon={disboundIcon}>
					Working with a small team to build out the MVP web app for pitch
					competitions. Researching and staying up to date with the latest
					standards such as RFC and FedCM. Generating questions and defining
					specific functional requirements. Responsible for database design and
					development with PostgreSQL and Google Cloud Storage Buckets.
					Responsible for building API endpoints with Node.js and Express.
					Integrating these APIs with the front end using HTML, CSS, JavaScript
					and React. Ownership of the user registration process with features
					such as Login, Signup, Google Auth, Email and Mobile Verification, JWT
					Generation and Validation, and more. Implementing features such as
					Live Video Calling, Chat, Daily Updates, User Connections, and
					Notifications.
				</Project>
				<Project title="APOC">
					Refactored antiquated database code, resulting in increased
					performance and decreased process time. Solved issues that were
					negatively impacting player experience, increasing the number of
					returning players.
				</Project>
				<Project title="Consulting">
					Worked closely with clients to build a web presence specific to their
					needs. Developed and maintained customized systems for communications
					and booking appointments.
				</Project>
			</div>
		);
}

interface ProjectProps {
	title: string;
	icon?: HtmlEscapedString | Promise<HtmlEscapedString>;
}

function Project({icon, title, children}: PropsWithChildren<ProjectProps>) {
    return (
        <div id="project">
            <div style="display: flex; align-items: center; gap: 8px;">
                {icon}
                <h2>{title}</h2>
            </div>
            <p>{children}</p>
        </div>
    )
}