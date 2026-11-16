# Database Normalization

## Introduction

Normalization is the process of organizing data in a relational database to reduce redundancy, improve data integrity, and eliminate update anomalies. The AI Resume Builder database has been designed following normalization principles to ensure efficient data storage and maintain consistency.

---

# Database Tables

The application contains the following major tables:

- Users
- Resumes
- Education
- Experience
- Projects
- Skills
- Certificates
- Languages
- Templates

Each table represents a single entity and stores information specific to that entity.

---

# First Normal Form (1NF)

A relation is in First Normal Form if:

- Every column contains atomic values.
- There are no repeating groups.
- Each row is uniquely identified by a primary key.

## Implementation

Each table in the Resume Builder satisfies 1NF.

### Example

### Users

| user_id | full_name | email |
|---------|-----------|-------|
| 1 | John Doe | john@example.com |

### Skills

| skill_id | resume_id | skill_name |
|----------|-----------|------------|
| 1 | 101 | Java |
| 2 | 101 | Python |
| 3 | 101 | SQL |

Instead of storing multiple skills in a single column, every skill is stored as a separate record.

Therefore, the database satisfies First Normal Form.

---

# Second Normal Form (2NF)

A relation is in Second Normal Form if:

- It satisfies First Normal Form.
- Every non-key attribute depends on the whole primary key.

## Implementation

Each table has a single-column primary key.

Examples:

### Users

user_id → full_name, email, password

### Resume

resume_id → title, template_id, created_at

### Education

education_id → college_name, degree, cgpa

All non-key attributes depend entirely on their respective primary keys.

Therefore, the database satisfies Second Normal Form.

---

# Third Normal Form (3NF)

A relation is in Third Normal Form if:

- It satisfies Second Normal Form.
- There are no transitive dependencies.

## Implementation

Customer and resume-related information is separated into different tables.

For example:

Instead of storing user details inside every resume record,

Users

- user_id
- full_name
- email

Resume

- resume_id
- user_id

Similarly,

Education

stores only education-related information.

Experience

stores only work experience.

Projects

stores only project information.

Skills

stores only technical skills.

Certificates

stores certification details.

Languages

stores language proficiency.

This separation eliminates redundancy and update anomalies.

Therefore, the database satisfies Third Normal Form.

---

# Boyce-Codd Normal Form (BCNF)

A relation is in BCNF if every determinant is a candidate key.

The AI Resume Builder schema mostly satisfies BCNF because:

- Every table has a single primary key.
- Functional dependencies originate from candidate keys.
- No partial or transitive dependencies exist.

---

# Advantages of Normalization

The normalized schema provides several benefits:

- Eliminates duplicate data.
- Reduces storage redundancy.
- Improves consistency.
- Simplifies updates.
- Prevents insertion anomalies.
- Prevents deletion anomalies.
- Improves maintainability.
- Makes future feature additions easier.

---

# Functional Dependencies

Examples of functional dependencies used in the schema:

user_id → full_name, email, password

resume_id → user_id, title, template_id

education_id → institution, degree, start_date, end_date

experience_id → company_name, designation, duration

project_id → project_name, description

skill_id → skill_name

certificate_id → certificate_name

language_id → language_name, proficiency

---

# Conclusion

The AI Resume Builder database follows normalization principles up to Third Normal Form (3NF). Most relations also satisfy BCNF because every determinant is a candidate key. The design minimizes redundancy, maintains referential integrity, and provides a scalable foundation for future enhancements such as AI-generated resume suggestions, ATS analysis, and template customization.