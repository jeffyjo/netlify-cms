import CMS from 'netlify-cms'

import ArticlePagePreview from './preview-templates/ArticlePreview';
import CustomPreview from './preview-templates/CustomPreview'


CMS.registerPreviewTemplate('article', ArticlePagePreview)
CMS.registerPreviewTemplate('custom', CustomPreview)
