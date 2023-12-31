import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/assignments",
    name: "Assignments",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Assignments.vue"),
  },
  {
    path: "/resources",
    name: "Resources",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sources.vue"),
  },
  {
    path: "/random",
    name: "Random",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Random.vue"),
  },
  {
    path: "/script",
    name: "Script",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LecturesScript.vue"),
  },
  {
    path: "/lecture00",
    name: "Lecture00",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture00.vue"
      ),
  },
  {
    path: "/vocabulary",
    name: "Vocabulary",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Vocabulary.vue"
      ),
  },
  {
    path: "/storytelling",
    name: "Storytelling",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Storytelling.vue"
      ),
  },
  {
    path: "/cssgames",
    name: "CSS Games",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/CSSgames.vue"
      ),
  },
  {
    path: "/responsiveimages",
    name: "Responsive Images",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/responsiveimages.vue"
      ),
  },
  {
    path: "/a01feedback",
    name: "Assignment 01 Feedback",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Assignment01Feedback.vue"
      ),
  },
  {
    path: "/a02feedback",
    name: "Assignment 02 Feedback",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Assignment02Feedback.vue"
      ),
  },
  {
    path: "/a03feedback",
    name: "Assignment 03 Feedback",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Assignment03Feedback.vue"
      ),
  },
  {
    path: "/mediaqueries",
    name: "MediaQueries",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/mediaqueries.vue"
      ),
  },
  {
    path: "/layouts",
    name: "Layouts",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/layouts.vue"
      ),
  },
  {
    path: "/books",
    name: "Books",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Books.vue"
      ),
  },
  {
    path: "/lecture01",
    name: "Lecture01",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture01.vue"
      ),
  },
  {
    path: "/lectures/lecture02",
    name: "Lecture02",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture02.vue"
      ),
  },
  {
    path: "/designingForAnimation",
    name: "Lecture03",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/designingForAnimation.vue"
      ),
  },
  {
    path: "/lectures/lecture04",
    name: "Lecture04",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture04.vue"
      ),
  },
  {
    path: "/lectures/lecture05",
    name: "Lecture05",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture05.vue"
      ),
  },
  {
    path: "/svg",
    name: "SVG",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/svg.vue"
      ),
  },
  {
    path: "/svgAnimationSMIL",
    name: "SVG Anamiation SMIL",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/svgAnimationSMIL.vue"
      ),
  },
  {
    path: "/CSSanimations",
    name: "CSSanimations",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/CSSanimations.vue"
      ),
  },
  {
    path: "/accessibility",
    name: "CSSanimations",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/accessibility.vue"
      ),
  },
  {
    path: "/lectures/lecture08",
    name: "Lecture07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture08.vue"
      ),
  },
  {
    path: "/lectures/lecture09",
    name: "Lecture09",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture09.vue"
      ),
  },
  {
    path: "/intersectionObserver",
    name: "Lecture12",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture12.vue"
      ),
  },
  {
    path: "/interactionsOnWeb",
    name: "Lecture13",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture13.vue"
      ),
  },
  {
    path: "/cssshapes",
    name: "Lecture14",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Lecture14.vue"
      ),
  },
  {
    path: "/transformations",
    name: "Transformations",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Transformations.vue"
      ),
  },
  {
    path: "/transitions",
    name: "Transitions",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/Transitions.vue"
      ),
  },
  {
    path: "/performance",
    name: "Performance",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/performance.vue"
      ),
  },
  {
    path: "/rootsofwebandcss",
    name: "Performance",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/rootsofwebandcss.vue"
      ),
  },
  {
    path: "/webframeworksandheadlesscms",
    name: "webframeworksandheadlesscms",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/webframeworksandheadlesscms.vue"
      ),
  },
  {
    path: "/laboratories/laboratory01",
    name: "Laboratory01",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory01.vue"
      ),
  },
  {
    path: "/laboratories/laboratory03",
    name: "Laboratory03",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory03.vue"
      ),
  },
  {
    path: "/laboratories/laboratory04",
    name: "Laboratory04",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory04.vue"
      ),
  },
  {
    path: "/laboratories/laboratory05",
    name: "Laboratory04",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory05.vue"
      ),
  },
  {
    path: "/labs_css_shapes_solutions",
    name: "Laboratory06",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LaboratoryCSSShapesSolutions.vue"
      ),
  },
  {
    path: "/labs_css_shapes",
    name: "Labs CSS Shapes",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LaboratoryCSSShapes.vue"
      ),
  },
  {
    path: "/labs_css_transform",
    name: "Laboratory06",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LaboratoryCSSTransform.vue"
      ),
  },
  {
    path: "/labs_css_transitions",
    name: "Laboratory06",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LaboratoryCSSTransitions.vue"
      ),
  },
  {
    path: "/labs_css_selectors_combinators",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LaboratoryCSSSelectorsCombinators.vue"
      ),
  },
  {
    path: "/labs_css_selectors_combinators_solutions",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LaboratoryCSSSelectorsCombinatorsSolutions.vue"
      ),
  },
  {
    path: "/labs_css_selectors",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LaboratoryCSSSelectors.vue"
      ),
  },
  {
    path: "/labs_css_selectors_solutions",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LaboratoryCSSSelectorsSolutions.vue"
      ),
  },
  {
    path: "/labs_css_selectors_pseudo_classes_nthchild",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LaboratoryCSSSelectorsPseudoClassesNthChild.vue"
      ),
  },
  {
    path: "/labs_css_selectors_pseudo_classes_nthchild_solutions",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LaboratoryCSSSelectorsPseudoClassesNthChildSolutions.vue"
      ),
  },
  {
    path: "/labs_css_selectors_pseudo_classes_nthlastchild",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LaboratoryCSSSelectorsPseudoClassesNthLastChild.vue"
      ),
  },
  {
    path: "/labs_css_selectors_pseudo_classes_nthlastchild_solutions",
    name: "Laboratory07",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LaboratoryCSSSelectorsPseudoClassesNthLastChildSolutions.vue"
      ),
  },
  {
    path: "/laboratories/laboratory08",
    name: "Laboratory08",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory08.vue"
      ),
  },
  {
    path: "/laboratories/laboratory08io",
    name: "Laboratory08",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory08io.vue"
      ),
  },
  {
    path: "/laboratories/laboratory09flex",
    name: "Laboratory09 Flexbox",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory09flexbox.vue"
      ),
  },
  {
    path: "/laboratories/laboratory09grid",
    name: "Laboratory09 CSS Grid",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Laboratory09grid.vue"
      ),
  },
  {
    path: "/labcodepen",
    name: "Laboratory Code Pen",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LabCodePen.vue"
      ),
  },
  {
    path: "/svgDrawing",
    name: "SVG Drawing",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/svgDrawingElements.vue"
      ),
  },
  {
    path: "/labintersectionobservercssselectors",
    name: "Intersection Observer CSS Selectors",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LabIntersectionObserverCSSSelectors.vue"
      ),
  },
  {
    path: "/labsharing1",
    name: "LabSharing1",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/LabSharing1.vue"
      ),
  },
  {
    path: "/designingforanimationlab",
    name: "DesigningForAnimationLab",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/DesigningForAnimationLab.vue"
      ),
  },
  {
    path: "/keyframesCSSVariables",
    name: "keyframesCSSVariables",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/keyframesCSSVariables.vue"
      ),
  },
  {
    path: "/michal",
    name: "Michal Pietrzyk",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/laboratories/Michal.vue"
      ),
  },
  {
    path: "/scrollama",
    name: "Scrollama",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/scrollama.vue"
      ),
  },
  {
    path: "/githubPages",
    name: "GitHub Pages",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/githubpages.vue"
      ),
  },
  {
    path: "/cssunits",
    name: "CSS Units",
    component: () =>
      import(
        /* webpackChunkName: "lecture01" */ "../views/lectures/cssUnits.vue"
      ),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
