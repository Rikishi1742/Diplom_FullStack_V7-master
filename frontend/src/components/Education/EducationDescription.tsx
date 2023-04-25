import EducationLesson from "./EducationLesson";

const EducationDescription = () => {

    const Lessons = [
        {
            id: 1,
            lessonName: "Broken Access Control",
            description: "Access control enforces policy such that users cannot act outside of their intended permissions.",
            testsId: [1, 2, 3]

        },
        {
            id: 2,
            lessonName: "Cryptographic Failures",
            description: "Many web applications and APIs do not properly protect sensitive data with strong encryption",
            testsId: [4]
        },
        {
            id: 3,
            lessonName: "Injection",
            description: "Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query",
            testsId: [5, 6]
        },
        {
            id: 4,
            lessonName: "Broken Access Control",
            description: "Access control enforces policy such that users cannot act outside of their intended permissions.",
            testsId: [7, 8]
        },
        {
            id: 5,
            lessonName: "Broken Access Control",
            description: "Access control enforces policy such that users cannot act outside of their intended permissions.",
            testsId: [9, 10, 11]
        },
    ]

    if (Lessons.length === 0) {
        return <h2>No Lessons Found</h2>
    }

    return (
        <div className='Container'>
            <div>
                {Lessons.map((lesson) => (
                    <EducationLesson
                    items={lesson}
                    />
                ))}
            </div>
        </div>
    );
}

export default EducationDescription