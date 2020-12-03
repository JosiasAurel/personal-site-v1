(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_stan"],{

/***/ "./node_modules/highlight.js/lib/languages/stan.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/stan.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Stan
Description: The Stan probabilistic programming language
Author: Jeffrey B. Arnold <jeffrey.arnold@gmail.com>
Website: http://mc-stan.org/
Category: scientific
*/

function stan(hljs) {
  // variable names cannot conflict with block identifiers
  var BLOCKS = [
    'functions',
    'model',
    'data',
    'parameters',
    'quantities',
    'transformed',
    'generated'
  ];
  var STATEMENTS = [
    'for',
    'in',
    'if',
    'else',
    'while',
    'break',
    'continue',
    'return'
  ];
  var SPECIAL_FUNCTIONS = [
    'print',
    'reject',
    'increment_log_prob|10',
    'integrate_ode|10',
    'integrate_ode_rk45|10',
    'integrate_ode_bdf|10',
    'algebra_solver'
  ];
  var VAR_TYPES = [
    'int',
    'real',
    'vector',
    'ordered',
    'positive_ordered',
    'simplex',
    'unit_vector',
    'row_vector',
    'matrix',
    'cholesky_factor_corr|10',
    'cholesky_factor_cov|10',
    'corr_matrix|10',
    'cov_matrix|10',
    'void'
  ];
  var FUNCTIONS = [
    'Phi', 'Phi_approx', 'abs', 'acos', 'acosh', 'algebra_solver', 'append_array',
    'append_col', 'append_row', 'asin', 'asinh', 'atan', 'atan2', 'atanh',
    'bernoulli_cdf', 'bernoulli_lccdf', 'bernoulli_lcdf', 'bernoulli_logit_lpmf',
    'bernoulli_logit_rng', 'bernoulli_lpmf', 'bernoulli_rng', 'bessel_first_kind',
    'bessel_second_kind', 'beta_binomial_cdf', 'beta_binomial_lccdf',
    'beta_binomial_lcdf', 'beta_binomial_lpmf', 'beta_binomial_rng', 'beta_cdf',
    'beta_lccdf', 'beta_lcdf', 'beta_lpdf', 'beta_rng', 'binary_log_loss',
    'binomial_cdf', 'binomial_coefficient_log', 'binomial_lccdf', 'binomial_lcdf',
    'binomial_logit_lpmf', 'binomial_lpmf', 'binomial_rng', 'block',
    'categorical_logit_lpmf', 'categorical_logit_rng', 'categorical_lpmf',
    'categorical_rng', 'cauchy_cdf', 'cauchy_lccdf', 'cauchy_lcdf', 'cauchy_lpdf',
    'cauchy_rng', 'cbrt', 'ceil', 'chi_square_cdf', 'chi_square_lccdf',
    'chi_square_lcdf', 'chi_square_lpdf', 'chi_square_rng', 'cholesky_decompose',
    'choose', 'col', 'cols', 'columns_dot_product', 'columns_dot_self', 'cos',
    'cosh', 'cov_exp_quad', 'crossprod', 'csr_extract_u', 'csr_extract_v',
    'csr_extract_w', 'csr_matrix_times_vector', 'csr_to_dense_matrix',
    'cumulative_sum', 'determinant', 'diag_matrix', 'diag_post_multiply',
    'diag_pre_multiply', 'diagonal', 'digamma', 'dims', 'dirichlet_lpdf',
    'dirichlet_rng', 'distance', 'dot_product', 'dot_self',
    'double_exponential_cdf', 'double_exponential_lccdf', 'double_exponential_lcdf',
    'double_exponential_lpdf', 'double_exponential_rng', 'e', 'eigenvalues_sym',
    'eigenvectors_sym', 'erf', 'erfc', 'exp', 'exp2', 'exp_mod_normal_cdf',
    'exp_mod_normal_lccdf', 'exp_mod_normal_lcdf', 'exp_mod_normal_lpdf',
    'exp_mod_normal_rng', 'expm1', 'exponential_cdf', 'exponential_lccdf',
    'exponential_lcdf', 'exponential_lpdf', 'exponential_rng', 'fabs',
    'falling_factorial', 'fdim', 'floor', 'fma', 'fmax', 'fmin', 'fmod',
    'frechet_cdf', 'frechet_lccdf', 'frechet_lcdf', 'frechet_lpdf', 'frechet_rng',
    'gamma_cdf', 'gamma_lccdf', 'gamma_lcdf', 'gamma_lpdf', 'gamma_p', 'gamma_q',
    'gamma_rng', 'gaussian_dlm_obs_lpdf', 'get_lp', 'gumbel_cdf', 'gumbel_lccdf',
    'gumbel_lcdf', 'gumbel_lpdf', 'gumbel_rng', 'head', 'hypergeometric_lpmf',
    'hypergeometric_rng', 'hypot', 'inc_beta', 'int_step', 'integrate_ode',
    'integrate_ode_bdf', 'integrate_ode_rk45', 'inv', 'inv_Phi',
    'inv_chi_square_cdf', 'inv_chi_square_lccdf', 'inv_chi_square_lcdf',
    'inv_chi_square_lpdf', 'inv_chi_square_rng', 'inv_cloglog', 'inv_gamma_cdf',
    'inv_gamma_lccdf', 'inv_gamma_lcdf', 'inv_gamma_lpdf', 'inv_gamma_rng',
    'inv_logit', 'inv_sqrt', 'inv_square', 'inv_wishart_lpdf', 'inv_wishart_rng',
    'inverse', 'inverse_spd', 'is_inf', 'is_nan', 'lbeta', 'lchoose', 'lgamma',
    'lkj_corr_cholesky_lpdf', 'lkj_corr_cholesky_rng', 'lkj_corr_lpdf',
    'lkj_corr_rng', 'lmgamma', 'lmultiply', 'log', 'log10', 'log1m', 'log1m_exp',
    'log1m_inv_logit', 'log1p', 'log1p_exp', 'log2', 'log_determinant',
    'log_diff_exp', 'log_falling_factorial', 'log_inv_logit', 'log_mix',
    'log_rising_factorial', 'log_softmax', 'log_sum_exp', 'logistic_cdf',
    'logistic_lccdf', 'logistic_lcdf', 'logistic_lpdf', 'logistic_rng', 'logit',
    'lognormal_cdf', 'lognormal_lccdf', 'lognormal_lcdf', 'lognormal_lpdf',
    'lognormal_rng', 'machine_precision', 'matrix_exp', 'max', 'mdivide_left_spd',
    'mdivide_left_tri_low', 'mdivide_right_spd', 'mdivide_right_tri_low', 'mean',
    'min', 'modified_bessel_first_kind', 'modified_bessel_second_kind',
    'multi_gp_cholesky_lpdf', 'multi_gp_lpdf', 'multi_normal_cholesky_lpdf',
    'multi_normal_cholesky_rng', 'multi_normal_lpdf', 'multi_normal_prec_lpdf',
    'multi_normal_rng', 'multi_student_t_lpdf', 'multi_student_t_rng',
    'multinomial_lpmf', 'multinomial_rng', 'multiply_log',
    'multiply_lower_tri_self_transpose', 'neg_binomial_2_cdf',
    'neg_binomial_2_lccdf', 'neg_binomial_2_lcdf', 'neg_binomial_2_log_lpmf',
    'neg_binomial_2_log_rng', 'neg_binomial_2_lpmf', 'neg_binomial_2_rng',
    'neg_binomial_cdf', 'neg_binomial_lccdf', 'neg_binomial_lcdf',
    'neg_binomial_lpmf', 'neg_binomial_rng', 'negative_infinity', 'normal_cdf',
    'normal_lccdf', 'normal_lcdf', 'normal_lpdf', 'normal_rng', 'not_a_number',
    'num_elements', 'ordered_logistic_lpmf', 'ordered_logistic_rng', 'owens_t',
    'pareto_cdf', 'pareto_lccdf', 'pareto_lcdf', 'pareto_lpdf', 'pareto_rng',
    'pareto_type_2_cdf', 'pareto_type_2_lccdf', 'pareto_type_2_lcdf',
    'pareto_type_2_lpdf', 'pareto_type_2_rng', 'pi', 'poisson_cdf', 'poisson_lccdf',
    'poisson_lcdf', 'poisson_log_lpmf', 'poisson_log_rng', 'poisson_lpmf',
    'poisson_rng', 'positive_infinity', 'pow', 'print', 'prod', 'qr_Q', 'qr_R',
    'quad_form', 'quad_form_diag', 'quad_form_sym', 'rank', 'rayleigh_cdf',
    'rayleigh_lccdf', 'rayleigh_lcdf', 'rayleigh_lpdf', 'rayleigh_rng', 'reject',
    'rep_array', 'rep_matrix', 'rep_row_vector', 'rep_vector', 'rising_factorial',
    'round', 'row', 'rows', 'rows_dot_product', 'rows_dot_self',
    'scaled_inv_chi_square_cdf', 'scaled_inv_chi_square_lccdf',
    'scaled_inv_chi_square_lcdf', 'scaled_inv_chi_square_lpdf',
    'scaled_inv_chi_square_rng', 'sd', 'segment', 'sin', 'singular_values', 'sinh',
    'size', 'skew_normal_cdf', 'skew_normal_lccdf', 'skew_normal_lcdf',
    'skew_normal_lpdf', 'skew_normal_rng', 'softmax', 'sort_asc', 'sort_desc',
    'sort_indices_asc', 'sort_indices_desc', 'sqrt', 'sqrt2', 'square',
    'squared_distance', 'step', 'student_t_cdf', 'student_t_lccdf',
    'student_t_lcdf', 'student_t_lpdf', 'student_t_rng', 'sub_col', 'sub_row',
    'sum', 'tail', 'tan', 'tanh', 'target', 'tcrossprod', 'tgamma', 'to_array_1d',
    'to_array_2d', 'to_matrix', 'to_row_vector', 'to_vector', 'trace',
    'trace_gen_quad_form', 'trace_quad_form', 'trigamma', 'trunc', 'uniform_cdf',
    'uniform_lccdf', 'uniform_lcdf', 'uniform_lpdf', 'uniform_rng', 'variance',
    'von_mises_lpdf', 'von_mises_rng', 'weibull_cdf', 'weibull_lccdf',
    'weibull_lcdf', 'weibull_lpdf', 'weibull_rng', 'wiener_lpdf', 'wishart_lpdf',
    'wishart_rng'
  ];
  var DISTRIBUTIONS = [
    'bernoulli', 'bernoulli_logit', 'beta', 'beta_binomial', 'binomial',
    'binomial_logit', 'categorical', 'categorical_logit', 'cauchy', 'chi_square',
    'dirichlet', 'double_exponential', 'exp_mod_normal', 'exponential', 'frechet',
    'gamma', 'gaussian_dlm_obs', 'gumbel', 'hypergeometric', 'inv_chi_square',
    'inv_gamma', 'inv_wishart', 'lkj_corr', 'lkj_corr_cholesky', 'logistic',
    'lognormal', 'multi_gp', 'multi_gp_cholesky', 'multi_normal',
    'multi_normal_cholesky', 'multi_normal_prec', 'multi_student_t', 'multinomial',
    'neg_binomial', 'neg_binomial_2', 'neg_binomial_2_log', 'normal',
    'ordered_logistic', 'pareto', 'pareto_type_2', 'poisson', 'poisson_log',
    'rayleigh', 'scaled_inv_chi_square', 'skew_normal', 'student_t', 'uniform',
    'von_mises', 'weibull', 'wiener', 'wishart'
  ];

  return {
    name: 'Stan',
    aliases: ['stanfuncs'],
    keywords: {
      $pattern: hljs.IDENT_RE,
      title: BLOCKS.join(' '),
      keyword: STATEMENTS.concat(VAR_TYPES).concat(SPECIAL_FUNCTIONS).join(' '),
      built_in: FUNCTIONS.join(' ')
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.COMMENT(
        /#/,
        /$/,
        {
          relevance: 0,
          keywords: {
            'meta-keyword': 'include'
          }
        }
      ),
      hljs.COMMENT(
        /\/\*/,
        /\*\//,
        {
          relevance: 0,
          // highlight doc strings mentioned in Stan reference
          contains: [
            {
              className: 'doctag',
              begin: /@(return|param)/
            }
          ]
        }
      ),
      {
        // hack: in range constraints, lower must follow "<"
        begin: /<\s*lower\s*=/,
        keywords: 'lower'
      },
      {
        // hack: in range constraints, upper must follow either , or <
        // <lower = ..., upper = ...> or <upper = ...>
        begin: /[<,]\s*upper\s*=/,
        keywords: 'upper'
      },
      {
        className: 'keyword',
        begin: /\btarget\s*\+=/,
        relevance: 10
      },
      {
        begin: '~\\s*(' + hljs.IDENT_RE + ')\\s*\\(',
        keywords: DISTRIBUTIONS.join(' ')
      },
      {
        className: 'number',
        variants: [
          {
            begin: /\b\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/
          },
          {
            begin: /\.\d+(?:[eE][+-]?\d+)?\b/
          }
        ],
        relevance: 0
      },
      {
        className: 'string',
        begin: '"',
        end: '"',
        relevance: 0
      }
    ]
  }
}

module.exports = stan;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3N0YW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfc3Rhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogU3RhblxuRGVzY3JpcHRpb246IFRoZSBTdGFuIHByb2JhYmlsaXN0aWMgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VcbkF1dGhvcjogSmVmZnJleSBCLiBBcm5vbGQgPGplZmZyZXkuYXJub2xkQGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHA6Ly9tYy1zdGFuLm9yZy9cbkNhdGVnb3J5OiBzY2llbnRpZmljXG4qL1xuXG5mdW5jdGlvbiBzdGFuKGhsanMpIHtcbiAgLy8gdmFyaWFibGUgbmFtZXMgY2Fubm90IGNvbmZsaWN0IHdpdGggYmxvY2sgaWRlbnRpZmllcnNcbiAgdmFyIEJMT0NLUyA9IFtcbiAgICAnZnVuY3Rpb25zJyxcbiAgICAnbW9kZWwnLFxuICAgICdkYXRhJyxcbiAgICAncGFyYW1ldGVycycsXG4gICAgJ3F1YW50aXRpZXMnLFxuICAgICd0cmFuc2Zvcm1lZCcsXG4gICAgJ2dlbmVyYXRlZCdcbiAgXTtcbiAgdmFyIFNUQVRFTUVOVFMgPSBbXG4gICAgJ2ZvcicsXG4gICAgJ2luJyxcbiAgICAnaWYnLFxuICAgICdlbHNlJyxcbiAgICAnd2hpbGUnLFxuICAgICdicmVhaycsXG4gICAgJ2NvbnRpbnVlJyxcbiAgICAncmV0dXJuJ1xuICBdO1xuICB2YXIgU1BFQ0lBTF9GVU5DVElPTlMgPSBbXG4gICAgJ3ByaW50JyxcbiAgICAncmVqZWN0JyxcbiAgICAnaW5jcmVtZW50X2xvZ19wcm9ifDEwJyxcbiAgICAnaW50ZWdyYXRlX29kZXwxMCcsXG4gICAgJ2ludGVncmF0ZV9vZGVfcms0NXwxMCcsXG4gICAgJ2ludGVncmF0ZV9vZGVfYmRmfDEwJyxcbiAgICAnYWxnZWJyYV9zb2x2ZXInXG4gIF07XG4gIHZhciBWQVJfVFlQRVMgPSBbXG4gICAgJ2ludCcsXG4gICAgJ3JlYWwnLFxuICAgICd2ZWN0b3InLFxuICAgICdvcmRlcmVkJyxcbiAgICAncG9zaXRpdmVfb3JkZXJlZCcsXG4gICAgJ3NpbXBsZXgnLFxuICAgICd1bml0X3ZlY3RvcicsXG4gICAgJ3Jvd192ZWN0b3InLFxuICAgICdtYXRyaXgnLFxuICAgICdjaG9sZXNreV9mYWN0b3JfY29ycnwxMCcsXG4gICAgJ2Nob2xlc2t5X2ZhY3Rvcl9jb3Z8MTAnLFxuICAgICdjb3JyX21hdHJpeHwxMCcsXG4gICAgJ2Nvdl9tYXRyaXh8MTAnLFxuICAgICd2b2lkJ1xuICBdO1xuICB2YXIgRlVOQ1RJT05TID0gW1xuICAgICdQaGknLCAnUGhpX2FwcHJveCcsICdhYnMnLCAnYWNvcycsICdhY29zaCcsICdhbGdlYnJhX3NvbHZlcicsICdhcHBlbmRfYXJyYXknLFxuICAgICdhcHBlbmRfY29sJywgJ2FwcGVuZF9yb3cnLCAnYXNpbicsICdhc2luaCcsICdhdGFuJywgJ2F0YW4yJywgJ2F0YW5oJyxcbiAgICAnYmVybm91bGxpX2NkZicsICdiZXJub3VsbGlfbGNjZGYnLCAnYmVybm91bGxpX2xjZGYnLCAnYmVybm91bGxpX2xvZ2l0X2xwbWYnLFxuICAgICdiZXJub3VsbGlfbG9naXRfcm5nJywgJ2Jlcm5vdWxsaV9scG1mJywgJ2Jlcm5vdWxsaV9ybmcnLCAnYmVzc2VsX2ZpcnN0X2tpbmQnLFxuICAgICdiZXNzZWxfc2Vjb25kX2tpbmQnLCAnYmV0YV9iaW5vbWlhbF9jZGYnLCAnYmV0YV9iaW5vbWlhbF9sY2NkZicsXG4gICAgJ2JldGFfYmlub21pYWxfbGNkZicsICdiZXRhX2Jpbm9taWFsX2xwbWYnLCAnYmV0YV9iaW5vbWlhbF9ybmcnLCAnYmV0YV9jZGYnLFxuICAgICdiZXRhX2xjY2RmJywgJ2JldGFfbGNkZicsICdiZXRhX2xwZGYnLCAnYmV0YV9ybmcnLCAnYmluYXJ5X2xvZ19sb3NzJyxcbiAgICAnYmlub21pYWxfY2RmJywgJ2Jpbm9taWFsX2NvZWZmaWNpZW50X2xvZycsICdiaW5vbWlhbF9sY2NkZicsICdiaW5vbWlhbF9sY2RmJyxcbiAgICAnYmlub21pYWxfbG9naXRfbHBtZicsICdiaW5vbWlhbF9scG1mJywgJ2Jpbm9taWFsX3JuZycsICdibG9jaycsXG4gICAgJ2NhdGVnb3JpY2FsX2xvZ2l0X2xwbWYnLCAnY2F0ZWdvcmljYWxfbG9naXRfcm5nJywgJ2NhdGVnb3JpY2FsX2xwbWYnLFxuICAgICdjYXRlZ29yaWNhbF9ybmcnLCAnY2F1Y2h5X2NkZicsICdjYXVjaHlfbGNjZGYnLCAnY2F1Y2h5X2xjZGYnLCAnY2F1Y2h5X2xwZGYnLFxuICAgICdjYXVjaHlfcm5nJywgJ2NicnQnLCAnY2VpbCcsICdjaGlfc3F1YXJlX2NkZicsICdjaGlfc3F1YXJlX2xjY2RmJyxcbiAgICAnY2hpX3NxdWFyZV9sY2RmJywgJ2NoaV9zcXVhcmVfbHBkZicsICdjaGlfc3F1YXJlX3JuZycsICdjaG9sZXNreV9kZWNvbXBvc2UnLFxuICAgICdjaG9vc2UnLCAnY29sJywgJ2NvbHMnLCAnY29sdW1uc19kb3RfcHJvZHVjdCcsICdjb2x1bW5zX2RvdF9zZWxmJywgJ2NvcycsXG4gICAgJ2Nvc2gnLCAnY292X2V4cF9xdWFkJywgJ2Nyb3NzcHJvZCcsICdjc3JfZXh0cmFjdF91JywgJ2Nzcl9leHRyYWN0X3YnLFxuICAgICdjc3JfZXh0cmFjdF93JywgJ2Nzcl9tYXRyaXhfdGltZXNfdmVjdG9yJywgJ2Nzcl90b19kZW5zZV9tYXRyaXgnLFxuICAgICdjdW11bGF0aXZlX3N1bScsICdkZXRlcm1pbmFudCcsICdkaWFnX21hdHJpeCcsICdkaWFnX3Bvc3RfbXVsdGlwbHknLFxuICAgICdkaWFnX3ByZV9tdWx0aXBseScsICdkaWFnb25hbCcsICdkaWdhbW1hJywgJ2RpbXMnLCAnZGlyaWNobGV0X2xwZGYnLFxuICAgICdkaXJpY2hsZXRfcm5nJywgJ2Rpc3RhbmNlJywgJ2RvdF9wcm9kdWN0JywgJ2RvdF9zZWxmJyxcbiAgICAnZG91YmxlX2V4cG9uZW50aWFsX2NkZicsICdkb3VibGVfZXhwb25lbnRpYWxfbGNjZGYnLCAnZG91YmxlX2V4cG9uZW50aWFsX2xjZGYnLFxuICAgICdkb3VibGVfZXhwb25lbnRpYWxfbHBkZicsICdkb3VibGVfZXhwb25lbnRpYWxfcm5nJywgJ2UnLCAnZWlnZW52YWx1ZXNfc3ltJyxcbiAgICAnZWlnZW52ZWN0b3JzX3N5bScsICdlcmYnLCAnZXJmYycsICdleHAnLCAnZXhwMicsICdleHBfbW9kX25vcm1hbF9jZGYnLFxuICAgICdleHBfbW9kX25vcm1hbF9sY2NkZicsICdleHBfbW9kX25vcm1hbF9sY2RmJywgJ2V4cF9tb2Rfbm9ybWFsX2xwZGYnLFxuICAgICdleHBfbW9kX25vcm1hbF9ybmcnLCAnZXhwbTEnLCAnZXhwb25lbnRpYWxfY2RmJywgJ2V4cG9uZW50aWFsX2xjY2RmJyxcbiAgICAnZXhwb25lbnRpYWxfbGNkZicsICdleHBvbmVudGlhbF9scGRmJywgJ2V4cG9uZW50aWFsX3JuZycsICdmYWJzJyxcbiAgICAnZmFsbGluZ19mYWN0b3JpYWwnLCAnZmRpbScsICdmbG9vcicsICdmbWEnLCAnZm1heCcsICdmbWluJywgJ2Ztb2QnLFxuICAgICdmcmVjaGV0X2NkZicsICdmcmVjaGV0X2xjY2RmJywgJ2ZyZWNoZXRfbGNkZicsICdmcmVjaGV0X2xwZGYnLCAnZnJlY2hldF9ybmcnLFxuICAgICdnYW1tYV9jZGYnLCAnZ2FtbWFfbGNjZGYnLCAnZ2FtbWFfbGNkZicsICdnYW1tYV9scGRmJywgJ2dhbW1hX3AnLCAnZ2FtbWFfcScsXG4gICAgJ2dhbW1hX3JuZycsICdnYXVzc2lhbl9kbG1fb2JzX2xwZGYnLCAnZ2V0X2xwJywgJ2d1bWJlbF9jZGYnLCAnZ3VtYmVsX2xjY2RmJyxcbiAgICAnZ3VtYmVsX2xjZGYnLCAnZ3VtYmVsX2xwZGYnLCAnZ3VtYmVsX3JuZycsICdoZWFkJywgJ2h5cGVyZ2VvbWV0cmljX2xwbWYnLFxuICAgICdoeXBlcmdlb21ldHJpY19ybmcnLCAnaHlwb3QnLCAnaW5jX2JldGEnLCAnaW50X3N0ZXAnLCAnaW50ZWdyYXRlX29kZScsXG4gICAgJ2ludGVncmF0ZV9vZGVfYmRmJywgJ2ludGVncmF0ZV9vZGVfcms0NScsICdpbnYnLCAnaW52X1BoaScsXG4gICAgJ2ludl9jaGlfc3F1YXJlX2NkZicsICdpbnZfY2hpX3NxdWFyZV9sY2NkZicsICdpbnZfY2hpX3NxdWFyZV9sY2RmJyxcbiAgICAnaW52X2NoaV9zcXVhcmVfbHBkZicsICdpbnZfY2hpX3NxdWFyZV9ybmcnLCAnaW52X2Nsb2dsb2cnLCAnaW52X2dhbW1hX2NkZicsXG4gICAgJ2ludl9nYW1tYV9sY2NkZicsICdpbnZfZ2FtbWFfbGNkZicsICdpbnZfZ2FtbWFfbHBkZicsICdpbnZfZ2FtbWFfcm5nJyxcbiAgICAnaW52X2xvZ2l0JywgJ2ludl9zcXJ0JywgJ2ludl9zcXVhcmUnLCAnaW52X3dpc2hhcnRfbHBkZicsICdpbnZfd2lzaGFydF9ybmcnLFxuICAgICdpbnZlcnNlJywgJ2ludmVyc2Vfc3BkJywgJ2lzX2luZicsICdpc19uYW4nLCAnbGJldGEnLCAnbGNob29zZScsICdsZ2FtbWEnLFxuICAgICdsa2pfY29ycl9jaG9sZXNreV9scGRmJywgJ2xral9jb3JyX2Nob2xlc2t5X3JuZycsICdsa2pfY29ycl9scGRmJyxcbiAgICAnbGtqX2NvcnJfcm5nJywgJ2xtZ2FtbWEnLCAnbG11bHRpcGx5JywgJ2xvZycsICdsb2cxMCcsICdsb2cxbScsICdsb2cxbV9leHAnLFxuICAgICdsb2cxbV9pbnZfbG9naXQnLCAnbG9nMXAnLCAnbG9nMXBfZXhwJywgJ2xvZzInLCAnbG9nX2RldGVybWluYW50JyxcbiAgICAnbG9nX2RpZmZfZXhwJywgJ2xvZ19mYWxsaW5nX2ZhY3RvcmlhbCcsICdsb2dfaW52X2xvZ2l0JywgJ2xvZ19taXgnLFxuICAgICdsb2dfcmlzaW5nX2ZhY3RvcmlhbCcsICdsb2dfc29mdG1heCcsICdsb2dfc3VtX2V4cCcsICdsb2dpc3RpY19jZGYnLFxuICAgICdsb2dpc3RpY19sY2NkZicsICdsb2dpc3RpY19sY2RmJywgJ2xvZ2lzdGljX2xwZGYnLCAnbG9naXN0aWNfcm5nJywgJ2xvZ2l0JyxcbiAgICAnbG9nbm9ybWFsX2NkZicsICdsb2dub3JtYWxfbGNjZGYnLCAnbG9nbm9ybWFsX2xjZGYnLCAnbG9nbm9ybWFsX2xwZGYnLFxuICAgICdsb2dub3JtYWxfcm5nJywgJ21hY2hpbmVfcHJlY2lzaW9uJywgJ21hdHJpeF9leHAnLCAnbWF4JywgJ21kaXZpZGVfbGVmdF9zcGQnLFxuICAgICdtZGl2aWRlX2xlZnRfdHJpX2xvdycsICdtZGl2aWRlX3JpZ2h0X3NwZCcsICdtZGl2aWRlX3JpZ2h0X3RyaV9sb3cnLCAnbWVhbicsXG4gICAgJ21pbicsICdtb2RpZmllZF9iZXNzZWxfZmlyc3Rfa2luZCcsICdtb2RpZmllZF9iZXNzZWxfc2Vjb25kX2tpbmQnLFxuICAgICdtdWx0aV9ncF9jaG9sZXNreV9scGRmJywgJ211bHRpX2dwX2xwZGYnLCAnbXVsdGlfbm9ybWFsX2Nob2xlc2t5X2xwZGYnLFxuICAgICdtdWx0aV9ub3JtYWxfY2hvbGVza3lfcm5nJywgJ211bHRpX25vcm1hbF9scGRmJywgJ211bHRpX25vcm1hbF9wcmVjX2xwZGYnLFxuICAgICdtdWx0aV9ub3JtYWxfcm5nJywgJ211bHRpX3N0dWRlbnRfdF9scGRmJywgJ211bHRpX3N0dWRlbnRfdF9ybmcnLFxuICAgICdtdWx0aW5vbWlhbF9scG1mJywgJ211bHRpbm9taWFsX3JuZycsICdtdWx0aXBseV9sb2cnLFxuICAgICdtdWx0aXBseV9sb3dlcl90cmlfc2VsZl90cmFuc3Bvc2UnLCAnbmVnX2Jpbm9taWFsXzJfY2RmJyxcbiAgICAnbmVnX2Jpbm9taWFsXzJfbGNjZGYnLCAnbmVnX2Jpbm9taWFsXzJfbGNkZicsICduZWdfYmlub21pYWxfMl9sb2dfbHBtZicsXG4gICAgJ25lZ19iaW5vbWlhbF8yX2xvZ19ybmcnLCAnbmVnX2Jpbm9taWFsXzJfbHBtZicsICduZWdfYmlub21pYWxfMl9ybmcnLFxuICAgICduZWdfYmlub21pYWxfY2RmJywgJ25lZ19iaW5vbWlhbF9sY2NkZicsICduZWdfYmlub21pYWxfbGNkZicsXG4gICAgJ25lZ19iaW5vbWlhbF9scG1mJywgJ25lZ19iaW5vbWlhbF9ybmcnLCAnbmVnYXRpdmVfaW5maW5pdHknLCAnbm9ybWFsX2NkZicsXG4gICAgJ25vcm1hbF9sY2NkZicsICdub3JtYWxfbGNkZicsICdub3JtYWxfbHBkZicsICdub3JtYWxfcm5nJywgJ25vdF9hX251bWJlcicsXG4gICAgJ251bV9lbGVtZW50cycsICdvcmRlcmVkX2xvZ2lzdGljX2xwbWYnLCAnb3JkZXJlZF9sb2dpc3RpY19ybmcnLCAnb3dlbnNfdCcsXG4gICAgJ3BhcmV0b19jZGYnLCAncGFyZXRvX2xjY2RmJywgJ3BhcmV0b19sY2RmJywgJ3BhcmV0b19scGRmJywgJ3BhcmV0b19ybmcnLFxuICAgICdwYXJldG9fdHlwZV8yX2NkZicsICdwYXJldG9fdHlwZV8yX2xjY2RmJywgJ3BhcmV0b190eXBlXzJfbGNkZicsXG4gICAgJ3BhcmV0b190eXBlXzJfbHBkZicsICdwYXJldG9fdHlwZV8yX3JuZycsICdwaScsICdwb2lzc29uX2NkZicsICdwb2lzc29uX2xjY2RmJyxcbiAgICAncG9pc3Nvbl9sY2RmJywgJ3BvaXNzb25fbG9nX2xwbWYnLCAncG9pc3Nvbl9sb2dfcm5nJywgJ3BvaXNzb25fbHBtZicsXG4gICAgJ3BvaXNzb25fcm5nJywgJ3Bvc2l0aXZlX2luZmluaXR5JywgJ3BvdycsICdwcmludCcsICdwcm9kJywgJ3FyX1EnLCAncXJfUicsXG4gICAgJ3F1YWRfZm9ybScsICdxdWFkX2Zvcm1fZGlhZycsICdxdWFkX2Zvcm1fc3ltJywgJ3JhbmsnLCAncmF5bGVpZ2hfY2RmJyxcbiAgICAncmF5bGVpZ2hfbGNjZGYnLCAncmF5bGVpZ2hfbGNkZicsICdyYXlsZWlnaF9scGRmJywgJ3JheWxlaWdoX3JuZycsICdyZWplY3QnLFxuICAgICdyZXBfYXJyYXknLCAncmVwX21hdHJpeCcsICdyZXBfcm93X3ZlY3RvcicsICdyZXBfdmVjdG9yJywgJ3Jpc2luZ19mYWN0b3JpYWwnLFxuICAgICdyb3VuZCcsICdyb3cnLCAncm93cycsICdyb3dzX2RvdF9wcm9kdWN0JywgJ3Jvd3NfZG90X3NlbGYnLFxuICAgICdzY2FsZWRfaW52X2NoaV9zcXVhcmVfY2RmJywgJ3NjYWxlZF9pbnZfY2hpX3NxdWFyZV9sY2NkZicsXG4gICAgJ3NjYWxlZF9pbnZfY2hpX3NxdWFyZV9sY2RmJywgJ3NjYWxlZF9pbnZfY2hpX3NxdWFyZV9scGRmJyxcbiAgICAnc2NhbGVkX2ludl9jaGlfc3F1YXJlX3JuZycsICdzZCcsICdzZWdtZW50JywgJ3NpbicsICdzaW5ndWxhcl92YWx1ZXMnLCAnc2luaCcsXG4gICAgJ3NpemUnLCAnc2tld19ub3JtYWxfY2RmJywgJ3NrZXdfbm9ybWFsX2xjY2RmJywgJ3NrZXdfbm9ybWFsX2xjZGYnLFxuICAgICdza2V3X25vcm1hbF9scGRmJywgJ3NrZXdfbm9ybWFsX3JuZycsICdzb2Z0bWF4JywgJ3NvcnRfYXNjJywgJ3NvcnRfZGVzYycsXG4gICAgJ3NvcnRfaW5kaWNlc19hc2MnLCAnc29ydF9pbmRpY2VzX2Rlc2MnLCAnc3FydCcsICdzcXJ0MicsICdzcXVhcmUnLFxuICAgICdzcXVhcmVkX2Rpc3RhbmNlJywgJ3N0ZXAnLCAnc3R1ZGVudF90X2NkZicsICdzdHVkZW50X3RfbGNjZGYnLFxuICAgICdzdHVkZW50X3RfbGNkZicsICdzdHVkZW50X3RfbHBkZicsICdzdHVkZW50X3Rfcm5nJywgJ3N1Yl9jb2wnLCAnc3ViX3JvdycsXG4gICAgJ3N1bScsICd0YWlsJywgJ3RhbicsICd0YW5oJywgJ3RhcmdldCcsICd0Y3Jvc3Nwcm9kJywgJ3RnYW1tYScsICd0b19hcnJheV8xZCcsXG4gICAgJ3RvX2FycmF5XzJkJywgJ3RvX21hdHJpeCcsICd0b19yb3dfdmVjdG9yJywgJ3RvX3ZlY3RvcicsICd0cmFjZScsXG4gICAgJ3RyYWNlX2dlbl9xdWFkX2Zvcm0nLCAndHJhY2VfcXVhZF9mb3JtJywgJ3RyaWdhbW1hJywgJ3RydW5jJywgJ3VuaWZvcm1fY2RmJyxcbiAgICAndW5pZm9ybV9sY2NkZicsICd1bmlmb3JtX2xjZGYnLCAndW5pZm9ybV9scGRmJywgJ3VuaWZvcm1fcm5nJywgJ3ZhcmlhbmNlJyxcbiAgICAndm9uX21pc2VzX2xwZGYnLCAndm9uX21pc2VzX3JuZycsICd3ZWlidWxsX2NkZicsICd3ZWlidWxsX2xjY2RmJyxcbiAgICAnd2VpYnVsbF9sY2RmJywgJ3dlaWJ1bGxfbHBkZicsICd3ZWlidWxsX3JuZycsICd3aWVuZXJfbHBkZicsICd3aXNoYXJ0X2xwZGYnLFxuICAgICd3aXNoYXJ0X3JuZydcbiAgXTtcbiAgdmFyIERJU1RSSUJVVElPTlMgPSBbXG4gICAgJ2Jlcm5vdWxsaScsICdiZXJub3VsbGlfbG9naXQnLCAnYmV0YScsICdiZXRhX2Jpbm9taWFsJywgJ2Jpbm9taWFsJyxcbiAgICAnYmlub21pYWxfbG9naXQnLCAnY2F0ZWdvcmljYWwnLCAnY2F0ZWdvcmljYWxfbG9naXQnLCAnY2F1Y2h5JywgJ2NoaV9zcXVhcmUnLFxuICAgICdkaXJpY2hsZXQnLCAnZG91YmxlX2V4cG9uZW50aWFsJywgJ2V4cF9tb2Rfbm9ybWFsJywgJ2V4cG9uZW50aWFsJywgJ2ZyZWNoZXQnLFxuICAgICdnYW1tYScsICdnYXVzc2lhbl9kbG1fb2JzJywgJ2d1bWJlbCcsICdoeXBlcmdlb21ldHJpYycsICdpbnZfY2hpX3NxdWFyZScsXG4gICAgJ2ludl9nYW1tYScsICdpbnZfd2lzaGFydCcsICdsa2pfY29ycicsICdsa2pfY29ycl9jaG9sZXNreScsICdsb2dpc3RpYycsXG4gICAgJ2xvZ25vcm1hbCcsICdtdWx0aV9ncCcsICdtdWx0aV9ncF9jaG9sZXNreScsICdtdWx0aV9ub3JtYWwnLFxuICAgICdtdWx0aV9ub3JtYWxfY2hvbGVza3knLCAnbXVsdGlfbm9ybWFsX3ByZWMnLCAnbXVsdGlfc3R1ZGVudF90JywgJ211bHRpbm9taWFsJyxcbiAgICAnbmVnX2Jpbm9taWFsJywgJ25lZ19iaW5vbWlhbF8yJywgJ25lZ19iaW5vbWlhbF8yX2xvZycsICdub3JtYWwnLFxuICAgICdvcmRlcmVkX2xvZ2lzdGljJywgJ3BhcmV0bycsICdwYXJldG9fdHlwZV8yJywgJ3BvaXNzb24nLCAncG9pc3Nvbl9sb2cnLFxuICAgICdyYXlsZWlnaCcsICdzY2FsZWRfaW52X2NoaV9zcXVhcmUnLCAnc2tld19ub3JtYWwnLCAnc3R1ZGVudF90JywgJ3VuaWZvcm0nLFxuICAgICd2b25fbWlzZXMnLCAnd2VpYnVsbCcsICd3aWVuZXInLCAnd2lzaGFydCdcbiAgXTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTdGFuJyxcbiAgICBhbGlhc2VzOiBbJ3N0YW5mdW5jcyddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogaGxqcy5JREVOVF9SRSxcbiAgICAgIHRpdGxlOiBCTE9DS1Muam9pbignICcpLFxuICAgICAga2V5d29yZDogU1RBVEVNRU5UUy5jb25jYXQoVkFSX1RZUEVTKS5jb25jYXQoU1BFQ0lBTF9GVU5DVElPTlMpLmpvaW4oJyAnKSxcbiAgICAgIGJ1aWx0X2luOiBGVU5DVElPTlMuam9pbignICcpXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAvIy8sXG4gICAgICAgIC8kLyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgJ21ldGEta2V5d29yZCc6ICdpbmNsdWRlJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgL1xcL1xcKi8sXG4gICAgICAgIC9cXCpcXC8vLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIC8vIGhpZ2hsaWdodCBkb2Mgc3RyaW5ncyBtZW50aW9uZWQgaW4gU3RhbiByZWZlcmVuY2VcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICBiZWdpbjogL0AocmV0dXJufHBhcmFtKS9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICB7XG4gICAgICAgIC8vIGhhY2s6IGluIHJhbmdlIGNvbnN0cmFpbnRzLCBsb3dlciBtdXN0IGZvbGxvdyBcIjxcIlxuICAgICAgICBiZWdpbjogLzxcXHMqbG93ZXJcXHMqPS8sXG4gICAgICAgIGtleXdvcmRzOiAnbG93ZXInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBoYWNrOiBpbiByYW5nZSBjb25zdHJhaW50cywgdXBwZXIgbXVzdCBmb2xsb3cgZWl0aGVyICwgb3IgPFxuICAgICAgICAvLyA8bG93ZXIgPSAuLi4sIHVwcGVyID0gLi4uPiBvciA8dXBwZXIgPSAuLi4+XG4gICAgICAgIGJlZ2luOiAvWzwsXVxccyp1cHBlclxccyo9LyxcbiAgICAgICAga2V5d29yZHM6ICd1cHBlcidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjogL1xcYnRhcmdldFxccypcXCs9LyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICd+XFxcXHMqKCcgKyBobGpzLklERU5UX1JFICsgJylcXFxccypcXFxcKCcsXG4gICAgICAgIGtleXdvcmRzOiBESVNUUklCVVRJT05TLmpvaW4oJyAnKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcYlxcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWystXT9cXGQrKT8vXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcLlxcZCsoPzpbZUVdWystXT9cXGQrKT9cXGIvXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXCInLFxuICAgICAgICBlbmQ6ICdcIicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YW47XG4iXSwic291cmNlUm9vdCI6IiJ9