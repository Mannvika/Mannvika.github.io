#include <string>

class Skills{};
class Projects{};
class Goals{};

using namespace std;

class ManavSanghvi{

    string titles[3] = {
        "Software Engineer."
        "Game Developer."
        "Lifelong Learner."
    };

    string education = "Bachelors in Computer Science at The University of Florida"; // Expected Dec 2026
    string bio = "Passionate developer eager to find myself doing work I love anywhere in the world.";

    string email = "manavsanghvi423@gmail.com";
    string linkedin = "";
    string github = "";

    Skills GetSkills(); // Click me!
    Projects GetProjects(); // Click me!
    Goals GetGoals(); // Click Me!

};