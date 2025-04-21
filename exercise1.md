The language I will consider for the exercise is Rust.

Rust is a statically typed language with a number of lints already built into the compiler. In addition, clippy is a popular tool for linting in rust. Testing is also supported as a part of the core Rust language. Some popular libraries for testing also include rstest, proptest and cargo-nextest. Building packages in Rust is done with cargo, the Rust package manager.

Alternatives to Jenkins and GitHub Actions for setting up CI include GitLab CI, CircleCI, Azure DevOps and AWS CodePipeline.

In the case of an application being worked on by 6 people, the scale of the project and frequency of developing features is accordingly small. For this reason, it would most likely be more reasonable to use cloud services for the CI/CD pipeline. However, if the project needs to be tested on specific kinds of hardware, a self-hosted environment might be necessary.

One additional point to consider is that compiling Rust programs is very slow in comparison to many other languages. This will also increase the cost of running the CI/CD environment on cloud-based services. For this reason, it could be reasonable to use a self-hosted environment even for smaller projects.
