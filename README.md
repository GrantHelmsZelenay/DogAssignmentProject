# 🐕 Dog Fact Assignment

> A Salesforce application that lets users claim unique dog breed facts through an interactive assignment workflow.

[![Salesforce](https://img.shields.io/badge/Salesforce-00A1E0?style=for-the-badge\&logo=salesforce\&logoColor=white)](https://www.salesforce.com/)
[![Apex](https://img.shields.io/badge/Apex-1798C1?style=for-the-badge\&logo=salesforce\&logoColor=white)](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/)
[![Lightning Flow](https://img.shields.io/badge/Lightning%20Flow-00A1E0?style=for-the-badge\&logo=salesforce\&logoColor=white)](https://help.salesforce.com/s/articleView?id=sf.flow.htm)
[![Salesforce DX](https://img.shields.io/badge/Salesforce%20DX-032D60?style=for-the-badge\&logo=salesforce\&logoColor=white)](https://developer.salesforce.com/tools/sfdx)

---

## 📖 Overview

**Dog Fact Assignment** is a Salesforce application designed to demonstrate an interactive record-assignment workflow using **Lightning Flow** and Salesforce data.

Users can assign themselves a unique dog breed fact. The application prevents multiple users from selecting the same dog breed fact and automatically populates the associated information once an assignment has been submitted.

The project demonstrates how Salesforce can combine **custom user interfaces, Screen Flows, record creation, dynamic data selection, and automation** into a simple end-to-end user experience.

---

## ✨ Features

* 🐾 **One-Click Assignment** — Start the assignment process directly from the home page.
* 👤 **User Information Collection** — A Screen Flow collects the user's full name.
* 🐶 **Unique Dog Breed Selection** — Users select from available dog breed facts.
* 🚫 **Duplicate Prevention** — Dog breed facts already assigned to another user cannot be selected.
* ⚡ **Automatic Record Population** — Related dog fact information is automatically populated after submission.
* 🔄 **Reassignment** — Users can change their selection and choose another available dog breed fact.
* 🎨 **Salesforce Lightning Experience** — Built to work naturally within the Salesforce platform.

---

# 🐕 User Flow

The application follows a simple assignment workflow:

```text
┌─────────────────────┐
│     Home Page       │
│                     │
│    "Assign Me"      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Create Assignment   │
│      Record         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    Assignment       │
│       Page          │
│                     │
│    "Assign Me"      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    Screen Flow      │
│                     │
│ • Full Name         │
│ • Dog Breed Fact    │
│   Selection         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Validate Available  │
│    Dog Breed Fact   │
│                     │
│ No Duplicate Facts  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      Submit         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Auto-Populate       │
│ Assignment Details  │
│                     │
│ • User Name         │
│ • Dog Breed         │
│ • Dog Fact          │
│ • Related Fields    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Change Assignment   │
│      (Optional)     │
│                     │
│ Select another      │
│ available fact      │
└─────────────────────┘
```

---

## 🖥️ How It Works

### 1. Start on the Home Page

The user begins on the Salesforce home page and selects the **Assign Me** button.

This starts the assignment experience and creates the necessary assignment record.

---

### 2. Open the Assignment Flow

From the assignment page, the user can select **Assign Me** to launch the Screen Flow.

The flow guides the user through the assignment process without requiring them to manually create or edit Salesforce records.

---

### 3. Enter User Information

The Screen Flow asks the user to provide their:

* **Full Name**
* **Dog Breed Fact**

The dog breed selection is dynamically restricted to facts that have not already been assigned.

---

### 4. Select a Unique Dog Fact

The user chooses a dog breed fact from the available options.

The application ensures that a dog breed fact already assigned to another user cannot be selected again.

For example:

```text
Available Dog Facts

☑ Golden Retriever
☑ German Shepherd
☑ Dachshund
☑ Siberian Husky
☐ Labrador Retriever  ← Already Assigned
☐ French Bulldog      ← Already Assigned
```

This allows each dog fact to have a single active assignment.

---

### 5. Submit the Assignment

After selecting their information, the user submits the Screen Flow.

Salesforce then updates the assignment record and populates the associated fields with the selected dog fact information.

```text
User
  ↓
Full Name
  ↓
Dog Breed Selection
  ↓
Submit
  ↓
Assignment Record Updated
  ↓
Dog Fact + Related Information Populated
```

---

### 6. Change an Assignment

Users are not locked into their first selection.

If they change their mind, they can select **Assign Me** again and choose another dog breed fact.

The previously selected fact becomes available again, while the newly selected fact becomes associated with the user.

This allows users to easily change their assignment without manually editing the underlying Salesforce record.

---

# 🛠️ Technology

This project is built using Salesforce development tools and metadata-driven development.

| Technology              | Purpose                                          |
| ----------------------- | ------------------------------------------------ |
| **Salesforce**          | Application platform and data management         |
| **Lightning Flow**      | Interactive assignment workflow                  |
| **Screen Flow**         | Collects user information and dog fact selection |
| **Salesforce DX**       | Source-driven Salesforce development             |
| **Salesforce Metadata** | Stores application configuration and components  |
| **Git / GitHub**        | Version control and source management            |

---

# 🏗️ Project Structure

The repository follows the standard Salesforce DX project structure:

```text
DogAssignmentProject/
│
├── .husky/
│
├── .vscode/
│
├── config/
│
├── force-app/
│   └── main/
│       └── default/
│           ├── applications/
│           ├── classes/
│           ├── flows/
│           ├── objects/
│           ├── permissionsets/
│           └── ...
│
├── scripts/
│
├── .forceignore
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── jest.config.js
├── package.json
├── sfdx-project.json
└── README.md
```

Salesforce DX projects store Salesforce metadata as source files, allowing application components to be version controlled and deployed between Salesforce environments.

---

# 🔄 Assignment Logic

The core functionality can be represented as:

```text
                  ┌──────────────────┐
                  │   User selects   │
                  │    "Assign Me"   │
                  └────────┬─────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │ Launch Screen     │
                  │ Flow              │
                  └────────┬─────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │ Enter Full Name  │
                  └────────┬─────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │ Query Available   │
                  │ Dog Facts         │
                  └────────┬─────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │ Select Unique     │
                  │ Dog Breed Fact    │
                  └────────┬─────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │      Submit       │
                  └────────┬─────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │ Populate Related  │
                  │ Assignment Data  │
                  └────────┬─────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │ Assignment       │
                  │ Complete         │
                  └──────────────────┘
```

---

# 🎯 Project Goals

This project demonstrates several Salesforce development concepts:

* Building a user-friendly Salesforce experience
* Creating interactive **Screen Flows**
* Working with Salesforce records and relationships
* Dynamically presenting available records to users
* Preventing duplicate assignments
* Automating record population
* Allowing users to modify an existing assignment
* Managing Salesforce metadata through source control
* Developing with the Salesforce DX project structure

---

# 🚀 Getting Started

## Prerequisites

Before working with the project, install:

* [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Salesforce Extension Pack](https://developer.salesforce.com/tools/vscode)
* A Salesforce Developer Org or appropriate Salesforce environment

Salesforce's standard DX workflow uses the Salesforce CLI to authorize orgs and deploy or retrieve metadata.

---

## Clone the Repository

```bash
git clone https://github.com/GrantHelmsZelenay/DogAssignmentProject.git

cd DogAssignmentProject
```

---

## Authorize a Salesforce Org

```bash
sf org login web
```

Follow the browser prompts to authorize your Salesforce environment.

---

## Deploy the Project

Deploy the Salesforce metadata to your authorized org:

```bash
sf project deploy start
```

Once deployment is complete, open the Salesforce org:

```bash
sf org open
```

---

# 🧪 Testing the Application

After deployment:

1. Open the Salesforce application.
2. Navigate to the home page.
3. Select **Assign Me**.
4. Open the assignment page.
5. Select **Assign Me** again.
6. Enter a full name.
7. Select an available dog breed fact.
8. Submit the Screen Flow.
9. Verify that the assignment record was populated.
10. Select **Assign Me** again to test reassignment.
11. Confirm that previously assigned dog facts are excluded when appropriate.

---

# 💡 Example User Experience

### Before Assignment

```text
┌────────────────────────────────────┐
│          DOG FACT ASSIGNMENT       │
│                                    │
│  Ready to claim a dog fact? 🐕     │
│                                    │
│          [ ASSIGN ME ]              │
│                                    │
└────────────────────────────────────┘
```

### Assignment Flow

```text
┌────────────────────────────────────┐
│          ASSIGN YOUR FACT           │
│                                    │
│  Full Name                         │
│  ┌──────────────────────────────┐  │
│  │ Jane Doe                     │  │
│  └──────────────────────────────┘  │
│                                    │
│  Dog Breed Fact                    │
│  ┌──────────────────────────────┐  │
│  │ Golden Retriever          ▼  │  │
│  └──────────────────────────────┘  │
│                                    │
│              [ SUBMIT ]             │
└────────────────────────────────────┘
```

### Completed Assignment

```text
┌────────────────────────────────────┐
│          YOUR DOG FACT 🐕           │
│                                    │
│  Name: Jane Doe                    │
│                                    │
│  Breed: Golden Retriever            │
│                                    │
│  Dog Fact:                          │
│  Golden Retrievers were originally │
│  bred as hunting and retrieving    │
│  dogs.                             │
│                                    │
│        [ CHANGE ASSIGNMENT ]        │
└────────────────────────────────────┘
```

---

# 📌 Key Salesforce Concepts Demonstrated

### Screen Flows

The project uses a **Screen Flow** to create an interactive experience that collects user input and guides them through the assignment process.

### Dynamic Record Selection

The available dog breed facts are determined dynamically so users are presented with facts that can still be assigned.

### Duplicate Prevention

The assignment process is designed around ensuring that the same dog breed fact cannot be simultaneously assigned to multiple users.

### Record Automation

After the user submits the flow, Salesforce automatically populates the assignment record with the selected dog fact and associated information.

### Reassignment

The workflow supports changing an existing assignment while maintaining the uniqueness requirement.

---

# 👨‍💻 Author

**Grant Helms Zelenay**

Salesforce Developer | Software Engineer

[GitHub](https://github.com/GrantHelmsZelenay)

---

## 📄 License

This project is intended as a demonstration of Salesforce development, automation, and source-driven development practices.
