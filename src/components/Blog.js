import React from 'react'

export default function Blog() {
    return (
        <div className='container'>
            <div ClassNameName="trending-articles">
                <h2 className='blog-heading'>Trending Articles</h2>
                <br />
                <div className="blog-container">

                    <div className='blog-box'>
                        <a href="https://blog.myfitnesspal.com/which-food-tracking-method-works-best-for-weight-loss/">
                            <img src="https://blog.myfitnesspal.com/wp-content/uploads/2017/03/5-Steps-to-Break-Free-from-Binge-Eating-752x472.jpg" ClassName="img-responsive" alt="5StepsToBreakFreeFromBingeEating"
                            />
                            <p>5 Steps To Break Free From Binge Eating</p>

                        </a>
                    </div>

                    <div className='blog-box'>
                        <a href="https://www.healthline.com/health/what-exercise-burns-the-most-calories#:~:text=Calories%20burned%20per%20minute%3A,-10.8%20to%2016&text=Running%20is%20the%20best%20workout,improving%20flexibility%2C%20and%20increasing%20endurance">
                            <img src="https://post.healthline.com/wp-content/uploads/2019/04/Runner_Stretch_Park_Orange-1296x728-Header-1296x728.jpg" ClassName="img-responsive" alt="14DayWalkPlan" />
                            <p>12 Exercises That Burn the Most Calories</p>
                        </a>
                    </div>

                    <div className='blog-box'>
                        <a href="https://blog.myfitnesspal.com/10-make-ahead-breakfasts-under-300-calories/">
                            <img src="https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-10.jpg" ClassName="img-responsive" alt="10MakeAheadBreakfasts" />
                            <p>10 Make-Ahead Breakfasts Under 300 Calories</p>

                        </a>
                    </div>


                </div>

            </div >

            <div ClassName="latest-articles">
                <h2 className='blog-heading' >Latest Articles</h2>
                <br />

                <div className="blog-container">



                    <div className='blog-box'>
                        <a href="https://blog.myfitnesspal.com/fitness-basics-goal-setting-and-motivation/">
                            <img src="https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Fitness-Basics-Goal-Setting-and-Motivation-2-1-752x472.jpg" ClassName="img-responsive" alt="FastedCardio" />
                            <p>Fitness Basics: Goal Setting and Motivation</p>
                        </a>
                    </div>



                    <div className='blog-box'>
                        <a href="https://blog.myfitnesspal.com/5-signs-youre-not-eating-enough-protein/">
                            <img src="https://blog.myfitnesspal.com/wp-content/uploads/2020/11/10-Signs-Youre-Not-Eating-Enough-Protein-2-752x472.jpg" ClassName="img-responsive" alt="HelpIHateVegetables" />
                            <p>10 Signs You’re Not Eating Enough Protein</p>
                        </a>
                    </div>


                    <div className='blog-box'>
                        <a href="http://blog.myfitnesspal.com/stretches-cyclists-5-pose-yoga-fix/">
                            <img src="https://blog.myfitnesspal.com/wp-content/uploads/2017/04/Yoga-5-Pose-Yoga-Fix-Stretches-for-Cyclists-752x472.jpg" ClassName="img-responsive" alt="Stretches-for-Cyclists" />
                            <p>Streches for Cyclists | 5-Pose Yoga Fix</p>
                        </a>
                    </div>

                </div>
            </div>
        </div >
    )
}
