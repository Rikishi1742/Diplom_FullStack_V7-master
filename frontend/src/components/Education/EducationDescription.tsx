import EducationLesson from "./EducationLesson";

const EducationDescription = () => {

    const Lessons = [
        {
            id: 1,
            lessonName: "Broken Access Control",
            description: "Access control enforces policy such that users cannot act outside of their intended permissions.",
            testsId: [1],
            
            PrevalenceLevel: 2,
            ExploitAbilityLevel: 2,
            ImpactLevel: 2,

        },
        {
            id: 2,
            lessonName: "Cryptographic Failures",
            description: "Many web applications and APIs do not properly protect sensitive data with strong encryption",
            testsId: [2],

            PrevalenceLevel: 3,
            ExploitAbilityLevel: 2,
            ImpactLevel: 1,
        },
        {
            id: 3,
            lessonName: "Injection",
            description: "Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query",
            testsId: [3],

            PrevalenceLevel: 3,
            ExploitAbilityLevel: 2,
            ImpactLevel: 2,
        },
        {
            id: 4,
            lessonName: "Security Misconfiguration",
            description: "Using ad hoc configuration standards can lead to default accounts being left in place, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information",
            testsId: [4],

            PrevalenceLevel: 3,
            ExploitAbilityLevel: 1,
            ImpactLevel: 3,
        },
        {
            id: 5,
            lessonName: "Insecure Design",
            description: "Pre-coding activities are critical for the design of secure software. The design phase of you development lifecycle should gather security requirements and model threats, and development time should be budgeted to allow for these requirements to be met. ",
            testsId: [5],

            PrevalenceLevel: 3,
            ExploitAbilityLevel: 3,
            ImpactLevel: 1,
        },
    
    ]

    if (Lessons.length === 0) {
        return <h2>No Lessons Found</h2>
    }

    return (
        <div className='Container' style={{height: "auto", marginTop: "15vh", marginBottom: "15vh"}}>
            <div>
                {Lessons.map((lesson) => (
                    <EducationLesson key={lesson.id}
                    items={lesson}
                    />
                ))}
            </div>
        </div>
    );
}

export default EducationDescription