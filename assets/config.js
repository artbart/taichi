/* Chair Tai Chi funnel — screen config
 * Structure modeled on the digestiplan.com/chair-taichi funnel (one quiz engine, ?q=N).
 * Question/option labels are functional UI. Interstitial ("info") copy is ORIGINAL and
 * intentionally honest — no fabricated stats or press logos. Swap freely.
 *
 * Screen types handled by the engine (app.js):
 *   single   - pick one, auto-advances. options: [{value,label,emoji?}]
 *   multi    - pick many + Continue. options + optional noneValue
 *   input    - numeric input(s) with unit toggle. fields/units. optional feedback()
 *   info     - interstitial with a Continue button (title, body, bullets?, chart?)
 *   email    - email capture
 *   name     - name capture
 *   goals    - personalized summary -> Get My Plan
 *   loader   - fake "building your plan" progress
 * The age gate lives on index.html; this config starts at the first quiz screen.
 */
window.FUNNEL = {
  product: "chair-taichi",
  brand: "Chair Tai Chi",
  // section label shown in the top bar progress for ranges of screens
  sections: [
    { name: "My profile", upTo: 12 },
    { name: "Activity",    upTo: 22 },
    { name: "Health & Safety", upTo: 25 },
    { name: "Preferences", upTo: 33 },
    { name: "Lifestyle",   upTo: 49 },
    { name: "Almost there", upTo: 58 },
  ],
  screens: [
    // ---------- My profile ----------
    { id: "tried_before", type: "single", section: "My profile",
      q: "Have you tried Chair Tai Chi before?",
      options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },

    { id: "intro_encourage", type: "info",
      title: "You'll do great",
      body: "Chair Tai Chi is gentle and beginner-friendly. You can practise at home using just a chair — and feel a difference sooner than you might expect." },

    { id: "focus_areas", type: "multi", section: "My profile", photos: true,
      q: "To start, tell us which areas you'd like to focus on:",
      sub: "Choose all that apply",
      options: [
        { value: "lose_weight", label: "Lose weight", emoji: "⚖️" },
        { value: "feel_healthier", label: "Feel healthier", emoji: "🌿" },
        { value: "lower_stress", label: "Lower stress", emoji: "🧘" },
        { value: "memory_focus", label: "Boost memory & focus", emoji: "🧠" },
      ] },

    { id: "intro_solution", type: "info",
      title: "Chair Tai Chi could be a great fit",
      body: "It's a low-impact way to move, build balance and stay steady — designed to be doable in about 10–15 minutes a day, seated.",
      personalize: true },

    { id: "body_now", type: "single", section: "My profile", layout: "cards",
      q: "How would you describe your body?",
      options: [
        { value: "thin", label: "Thin" }, { value: "mid", label: "Mid-sized" },
        { value: "plump", label: "Plump" }, { value: "plus", label: "Plus-sized" },
      ] },

    { id: "dream_body", type: "single", section: "My profile", layout: "cards",
      q: "What's your goal?",
      options: [
        { value: "slim", label: "Slimmer", emoji: "🌱" },
        { value: "toned", label: "More toned", emoji: "💪" },
        { value: "stronger", label: "Stronger & steadier", emoji: "🌳" },
        { value: "sizes", label: "A few sizes smaller", emoji: "✨" },
      ] },

    { id: "target_areas", type: "multi", section: "My profile", photos: true,
      q: "Which areas do you want to focus on?",
      sub: "Choose all that apply",
      options: [
        { value: "legs", label: "Legs", emoji: "🦵" },
        { value: "belly", label: "Belly", emoji: "🌀" },
        { value: "arms", label: "Arms", emoji: "💪" },
        { value: "posture", label: "Posture & back", emoji: "🧍" },
        { value: "balance", label: "Balance & stability", emoji: "⚖️" },
      ] },

    { id: "height", type: "input", section: "My profile",
      q: "What's your height?",
      sub: "We'll use this to set a sensible, healthy pace.",
      units: ["cm", "ft"], field: "height" },

    { id: "weight", type: "input", section: "My profile",
      q: "What's your current weight?",
      units: ["kg", "lb"], field: "weight", computeBMI: true },

    { id: "goal_weight", type: "input", section: "My profile",
      q: "And what's your goal weight?",
      sub: "An estimate is fine — you can change it later.",
      units: ["kg", "lb"], field: "goal_weight" },

    { id: "projection_1", type: "info", chart: true,
      title: "Here's a realistic path",
      body: "Based on your answers, here's a steady, sustainable path toward your goal. Gentle and consistent beats fast and harsh — especially long term." },

    { id: "intro_plan", type: "info",
      title: "A goal without a plan is just a wish",
      body: "Tell us a little more so we can shape a Chair Tai Chi plan that genuinely fits your body and your week.",
      personalize: true },

    // ---------- Activity ----------
    { id: "last_in_shape", type: "single", section: "Activity",
      q: "When were you last in the best shape of your life?",
      options: [
        { value: "lt1", label: "Less than a year ago", emoji: "🤔" },
        { value: "1to2", label: "1 to 2 years ago", emoji: "😮" },
        { value: "gt3", label: "More than 3 years ago", emoji: "😥" },
        { value: "never", label: "Never", emoji: "🙅" },
      ] },

    { id: "typical_day", type: "single", section: "Activity",
      q: "What does your typical day look like?",
      options: [
        { value: "sitting", label: "I spend most of the day sitting", emoji: "💻" },
        { value: "some", label: "I move around from time to time", emoji: "🚶" },
        { value: "active", label: "I'm on my feet all day", emoji: "👟" },
      ] },

    { id: "activities", type: "multi", section: "Activity",
      q: "Are any of these part of your life?",
      sub: "Choose all that apply",
      options: [
        { value: "pet", label: "Walking my pet", emoji: "🐕" },
        { value: "grandkids", label: "Active time with grandchildren", emoji: "👵" },
        { value: "stairs", label: "Climbing stairs frequently", emoji: "🪜" },
        { value: "household", label: "Active household tasks", emoji: "🏡" },
      ], noneValue: "none", noneLabel: "None of these" },

    { id: "exercise_freq", type: "single", section: "Activity",
      q: "How often do you do any gentle exercise?",
      options: [
        { value: "daily", label: "Almost every day" },
        { value: "3to4", label: "3–4 times per week" },
        { value: "1to2", label: "1–2 times per week" },
        { value: "rare", label: "Once a month or less" },
      ] },

    { id: "intro_effective", type: "info",
      title: "Gentle doesn't mean ineffective",
      body: "Seated Tai Chi trains balance, mobility and steady strength through slow, controlled movement — without the strain of high-impact workouts." },

    { id: "relate_breath", type: "single", section: "Activity",
      q: "Do you relate to this?",
      statement: "I get out of breath from simply walking or climbing stairs",
      options: [{ value: "no", label: "No" }, { value: "yes", label: "Yes" }] },

    { id: "relate_hard", type: "single", section: "Activity",
      q: "Do you relate to this?",
      statement: "Most workouts feel too hard to stick with long term",
      options: [{ value: "no", label: "No" }, { value: "yes", label: "Yes" }] },

    { id: "relate_progress", type: "single", section: "Activity",
      q: "Do you relate to this?",
      statement: "I get frustrated when I don't see progress",
      options: [{ value: "no", label: "No" }, { value: "yes", label: "Yes" }] },

    { id: "intro_eligible", type: "info",
      title: "Good news — Chair Tai Chi suits you well",
      body: "Your answers line up nicely with a gentle, seated routine. Let's finish a few details to tailor it.",
      personalize: true },

    // ---------- Health & Safety ----------
    { id: "medications", type: "single", section: "Health & Safety",
      q: "Are you taking any medications?",
      sub: "This is just for your safety.",
      options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },

    { id: "mobility", type: "single", section: "Health & Safety",
      q: "Any physical or mobility restrictions we should know about?",
      sub: "This is just for your safety.",
      options: [
        { value: "yes", label: "Yes" }, { value: "no", label: "No" },
        { value: "na", label: "Prefer not to answer" },
      ],
      safetyNote: "Please adapt any movements to suit your body. We recommend checking with your doctor or physical therapist before starting any new activity." },

    { id: "intro_safe", type: "info",
      title: "A safer way to build balance",
      body: "Because it's seated and low-impact, Chair Tai Chi is a gentle way to build stability and confidence in your movement." },

    // ---------- Preferences ----------
    { id: "where_exercise", type: "multi", section: "Preferences",
      q: "Where do you prefer to exercise?",
      sub: "Choose all that apply",
      options: [
        { value: "home", label: "Home", emoji: "🏠" },
        { value: "outside", label: "Outside", emoji: "🌳" },
        { value: "gym", label: "Gym", emoji: "🏋️" },
        { value: "any", label: "No preference", emoji: "🤷" },
      ] },

    { id: "intro_home", type: "info",
      title: "Your home works perfectly",
      body: "All you need is a sturdy chair and a little space. No equipment, no commute — practise whenever it suits you." },

    { id: "effort_level", type: "single", section: "Preferences",
      q: "How much daily effort feels right to you?",
      options: [
        { value: "easy", label: "Easy & gentle", emoji: "👌" },
        { value: "medium", label: "A moderate challenge", emoji: "🔥" },
        { value: "hard", label: "Push me a bit", emoji: "🏅" },
        { value: "unsure", label: "I'm not sure", emoji: "🤷" },
      ] },

    { id: "intro_lowdose", type: "info",
      title: "Small, steady sessions add up",
      body: "Short daily practice is easier to keep up than long, occasional workouts — and consistency is what actually moves the needle." },

    // like / dislike series
    { id: "ld_mobility", type: "single", section: "Preferences", layout: "ld",
      q: "Like or dislike?", statement: "Stretching & mobility",
      options: [{ value: "dislike", label: "Dislike", emoji: "👎" }, { value: "neutral", label: "Neutral", emoji: "😐" }, { value: "like", label: "Like", emoji: "👍" }] },
    { id: "ld_breathing", type: "single", section: "Preferences", layout: "ld",
      q: "Like or dislike?", statement: "Mindful breathing",
      options: [{ value: "dislike", label: "Dislike", emoji: "👎" }, { value: "neutral", label: "Neutral", emoji: "😐" }, { value: "like", label: "Like", emoji: "👍" }] },
    { id: "ld_balance", type: "single", section: "Preferences", layout: "ld",
      q: "Like or dislike?", statement: "Balance work",
      options: [{ value: "dislike", label: "Dislike", emoji: "👎" }, { value: "neutral", label: "Neutral", emoji: "😐" }, { value: "like", label: "Like", emoji: "👍" }] },
    { id: "ld_strength", type: "single", section: "Preferences", layout: "ld",
      q: "Like or dislike?", statement: "Gentle seated strength",
      options: [{ value: "dislike", label: "Dislike", emoji: "👎" }, { value: "neutral", label: "Neutral", emoji: "😐" }, { value: "like", label: "Like", emoji: "👍" }] },

    { id: "projection_2", type: "info", chart: true,
      title: "You're on track",
      body: "With a routine matched to your preferences, steady progress is realistic. We'll adapt it as you go." },

    // ---------- Lifestyle ----------
    { id: "tension", type: "single", section: "Lifestyle",
      q: "Do you ever feel mentally tense or on edge?",
      options: [
        { value: "lots", label: "A lot lately", emoji: "😫" },
        { value: "some", label: "Some ups and downs", emoji: "😐" },
        { value: "steady", label: "Mostly steady", emoji: "😌" },
      ] },

    { id: "intro_stress", type: "info",
      title: "Movement and breath help calm the mind",
      body: "Slow, mindful movement paired with steady breathing is a well-known way to ease tension and feel more grounded." },

    { id: "water", type: "single", section: "Lifestyle",
      q: "What's your daily water intake?",
      options: [
        { value: "coffee", label: "Mainly coffee or tea", emoji: "☕" },
        { value: "low", label: "About 2 glasses", emoji: "💧" },
        { value: "mid", label: "2 to 6 glasses", emoji: "💦" },
        { value: "high", label: "More than 6 glasses", emoji: "🌊" },
      ] },

    { id: "mood", type: "single", section: "Lifestyle",
      q: "How's your mood most days?",
      options: [
        { value: "low", label: "Low — often down or irritable" },
        { value: "mixed", label: "Up and down — depends on the day" },
        { value: "steady", label: "Steady — usually okay" },
      ] },

    { id: "intro_focus", type: "info",
      title: "Gentle movement can lift your mood",
      body: "Regular light activity supports energy, focus and emotional steadiness — and it's easy to keep up when it's enjoyable." },

    { id: "rested", type: "single", section: "Lifestyle",
      q: "How often do you wake up feeling rested?",
      options: [
        { value: "always", label: "Always", emoji: "😊" },
        { value: "often", label: "Frequently", emoji: "😌" },
        { value: "rare", label: "Infrequently", emoji: "😕" },
        { value: "never", label: "Never", emoji: "😴" },
      ] },

    { id: "sleep_improve", type: "multi", section: "Lifestyle",
      q: "Anything you'd like to improve about your sleep?",
      sub: "Choose all that apply",
      options: [
        { value: "ok", label: "No, I sleep well" },
        { value: "fall", label: "Difficulty falling asleep" },
        { value: "tired", label: "Waking up tired" },
        { value: "night", label: "Waking during the night" },
        { value: "flashes", label: "Hot flashes / night sweats" },
        { value: "schedule", label: "No sleep schedule" },
      ] },

    { id: "intro_sleep", type: "info",
      title: "Gentle activity supports better sleep",
      body: "Light daytime movement and a calmer nervous system can help you fall asleep more easily and rest more deeply." },

    { id: "diet", type: "multi", section: "Lifestyle",
      q: "Are you following a specific way of eating?",
      sub: "Choose all that apply",
      options: [
        { value: "no", label: "No" }, { value: "lowcarb", label: "Low-carb" },
        { value: "veg", label: "Vegetarian" }, { value: "plant", label: "Fully plant-based" },
        { value: "pesc", label: "Pescatarian" }, { value: "lactose", label: "Lactose-free" },
        { value: "gluten", label: "Gluten-free" }, { value: "keto", label: "Keto" },
        { value: "other", label: "Other" },
      ] },

    { id: "produce", type: "single", section: "Lifestyle",
      q: "How's your fruit and vegetable intake?",
      options: [
        { value: "low", label: "None or a little", emoji: "🙅" },
        { value: "fair", label: "A fair bit", emoji: "🍎" },
        { value: "lots", label: "Plenty", emoji: "🥕" },
      ] },

    { id: "intro_nutrition", type: "info",
      title: "Simple nutrition support, no strict diets",
      body: "You'll get easy, optional nutrition tips that complement your routine — no calorie counting or food rules required." },

    { id: "cravings", type: "multi", section: "Lifestyle",
      q: "What do you crave most often?",
      sub: "Choose all that apply",
      options: [
        { value: "sweet", label: "Sweet treats", emoji: "🧁" },
        { value: "salty", label: "Salty snacks", emoji: "🥨" },
        { value: "fast", label: "Fast food", emoji: "🍟" },
        { value: "wine", label: "A glass of wine", emoji: "🍷" },
        { value: "soda", label: "Soda", emoji: "🥤" },
      ], noneValue: "none", noneLabel: "None of these" },

    { id: "habits", type: "multi", section: "Lifestyle",
      q: "Do any of these sound like you?",
      sub: "Choose all that apply",
      options: [
        { value: "emotional", label: "Emotional or boredom eating", emoji: "😫" },
        { value: "full", label: "Eating when already full", emoji: "🍩" },
        { value: "late", label: "Late-night snacking", emoji: "🌙" },
        { value: "screen", label: "Eating in front of a screen", emoji: "💻" },
        { value: "skip", label: "Skipping meals too often", emoji: "🍽️" },
      ], noneValue: "none", noneLabel: "None of these" },

    { id: "tracker", type: "single", section: "Lifestyle",
      q: "Do you wear a smartwatch or fitness tracker?",
      sub: "e.g. Apple Watch, Fitbit, Garmin",
      options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },

    { id: "menopause", type: "single", section: "Lifestyle",
      q: "Have you gone through menopause?",
      sub: "Hormonal changes can affect metabolism and needs.",
      options: [
        { value: "no", label: "No" }, { value: "going", label: "Going through it" },
        { value: "passed", label: "Already passed it" }, { value: "unsure", label: "Not sure" },
        { value: "na", label: "Prefer not to answer" },
      ] },

    // ---------- Almost there ----------
    { id: "intro_almost", type: "info",
      title: "Almost done!",
      body: "Just a few quick questions about what keeps you motivated, so we can support you the right way." },

    { id: "main_reason", type: "multi", section: "Almost there",
      q: "What's your main reason for wanting to get in shape?",
      sub: "Choose all that apply",
      options: [
        { value: "confident", label: "Feel more confident in my body" },
        { value: "energetic", label: "Feel healthier and more energetic" },
        { value: "look", label: "Change how I look" },
        { value: "clothes", label: "Fit my clothes better" },
        { value: "independent", label: "Stay strong and independent" },
      ] },

    { id: "motivates", type: "multi", section: "Almost there",
      q: "What motivates you to exercise?",
      sub: "Choose all that apply",
      options: [
        { value: "health", label: "Improving health" },
        { value: "immune", label: "Boosting immunity" },
        { value: "look", label: "Looking better" },
        { value: "strength", label: "Building strength & endurance" },
        { value: "mood", label: "Managing stress / improving mood" },
        { value: "example", label: "Setting a positive example" },
      ] },

    { id: "motivation_level", type: "single", section: "Almost there",
      q: "How motivated are you right now?",
      options: [
        { value: "ready", label: "I'm 100% ready" },
        { value: "hopeful", label: "I'm pretty hopeful" },
        { value: "unsure", label: "I'm a bit unsure" },
        { value: "easy", label: "I'm taking it easy" },
      ] },

    { id: "obstacles", type: "multi", section: "Almost there",
      q: "What's made it hard to stay motivated before?",
      sub: "Choose all that apply",
      options: [
        { value: "results", label: "Didn't see results" },
        { value: "regain", label: "Lost weight, then regained it" },
        { value: "noplan", label: "No clear, effective plan" },
        { value: "toohard", label: "Previous plans were too hard" },
        { value: "notime", label: "No time to exercise" },
        { value: "coaching", label: "Ineffective coaching" },
        { value: "none", label: "No real obstacles" },
      ] },

    { id: "intro_sustainable", type: "info",
      title: "Why people give up — and how we avoid it",
      body: "The most common reason people quit is starting too big, too fast. Our plan does the opposite: small, sustainable steps you can actually keep." },

    { id: "explore", type: "multi", section: "Almost there",
      q: "What else would you like to improve?",
      sub: "Choose all that apply",
      options: [
        { value: "energy", label: "More energy" },
        { value: "habits", label: "Healthier habits" },
        { value: "stress", label: "Less stress" },
        { value: "flex", label: "Flexibility" },
        { value: "posture", label: "Better posture" },
        { value: "endurance", label: "Endurance" },
        { value: "immune", label: "Immune system" },
      ] },

    { id: "pace", type: "single", section: "Almost there",
      q: "Your Chair Tai Chi plan is ready! How quickly do you want to progress?",
      options: [
        { value: "fast", label: "As quickly as possible" },
        { value: "slow", label: "Slow and steady" },
        { value: "between", label: "Somewhere in between" },
      ] },

    { id: "intro_paced", type: "info",
      title: "Perfect — we've matched your pace",
      body: "And we'll keep adapting your plan as your body and energy change over time." },

    { id: "daypart", type: "single", section: "Almost there",
      q: "When do you feel most 'on' — morning or night?",
      options: [
        { value: "morning", label: "Morning" },
        { value: "night", label: "Night" },
        { value: "depends", label: "It depends" },
      ] },

    // ---------- Plan generation + capture ----------
    { id: "loader", type: "loader",
      title: "Creating your personalized plan…",
      steps: ["Analyzing your answers", "Matching activity preferences", "Checking health & safety", "Building your action plan"] },

    { id: "email", type: "email",
      title: "Your action plan is ready",
      sub: "Enter your email to get your personal Chair Tai Chi plan." },

    { id: "name", type: "name",
      title: "What's your name?" },

    { id: "goals", type: "goals" },
  ],
};
