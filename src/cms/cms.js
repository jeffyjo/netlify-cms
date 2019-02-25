import CMS from 'netlify-cms'

import ArticlePagePreview from './preview-templates/ArticlePreview';
import CustomPagePreview from './preview-templates/CustomPreview'


CMS.registerPreviewTemplate('article', ArticlePagePreview)
CMS.registerPreviewTemplate('custom', CustomPagePreview)
