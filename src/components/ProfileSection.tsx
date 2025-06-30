import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Briefcase, Code, GraduationCap, Target, Globe, Database, Palette, Users } from 'lucide-react';
import PixelAvatar from './PixelAvatar';

const ProfileSection: React.FC = () => {
  const internships = [
    {
      period: '2024.03-2024.08',
      company: '淘药宝·成中医线上中药材交易平台',
      position: 'AI 产品经理',
      projects: [
        {
          name: '平台"咨询"功能交互优化',
          description: '聚焦B端农户线上咨询表单转化优化，使用SQL梳理用户路径，"定位地址手填"环节跳失率高达46%。结合用户访谈与行为数据，提出自动定位+地图选点方案，咨询提交率由54%提升至72%。'
        },
        {
          name: '智能客服"药宝Seek"模块搭建',
          description: '基于Coze + GPT-4搭建多轮对话流，结合订单号/报告号自动提取，配合向量检索(RAG)匹配FAQ。内测覆盖率达80%，高频问题转人工率降35%，人均咨询时长缩短20%。'
        }
      ]
    },
    {
      period: '2023.06-2023.10',
      company: '浙商证券',
      position: '产品经理',
      description: '使用SQL清洗、聚合20万+条支付流水，构建基于客户ID的收付款频次及金额分布模型，支撑大额/高频异常交易自动识别。协助产品经理输出字段定义、输入要求、预警触发规则。'
    }
  ];

  const projects = [
    {
      name: 'AI Agent 个人简历网站搭建与上线',
      description: '独立全流程从0-1搭建了一个基于Vercel的"AI智能对话"简历展示网站，完整覆盖AI Chatbot设计、Deepseek API调用、前端可视化、自动化部署与域名配置。',
      details: [
        '基于Boltnew轻代码平台搭建前端(Vite + React)',
        '结合Midjourney生成UI主视觉与插画',
        '使用GitHub + Vercel自动化部署，绑定自有域名并配置HTTPS'
      ]
    }
  ];

  const campusExperience = [
    {
      period: '2022.09-2023.06',
      organization: '西南财经大学学生会',
      department: '运营部',
      description: '组织"投资理财挑战赛"，统筹覆盖7所高校200+人。中期通过搭建FAQ系统+模板群发机制，重复咨询量下降50%+，大幅减轻运营压力。'
    }
  ];

  const skills = [
    { category: '数据技能', items: ['SQL', 'Excel', 'SPSS'] },
    { category: '编程技能', items: ['Python', 'C++'] },
    { category: '工具能力', items: ['Axure', 'Boltnew', 'MidJourney', 'Ps', 'Xmind', 'Office', '可画', 'ChatGPT'] }
  ];

  const highlights = [
    { icon: GraduationCap, title: '西南财经大学', desc: '金融学 · 2026届' },
    { icon: Target, title: '产品经理实习', desc: '每周全勤 · 6个月+' },
    { icon: Globe, title: '立刻到岗', desc: '随时可以开始实习' }
  ];

  return (
    <div className="h-full overflow-y-auto custom-scrollbar relative">
      {/* 个人信息头部 */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 干净的圆形头像 */}
        <PixelAvatar />
        
        {/* 增加1厘米垂直间距 (约38px) */}
        <div className="h-10"></div>
        
        <h1 className="text-3xl font-bold text-white mb-2">AI狂热爱好者</h1>
        <p className="text-2xl font-semibold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2">罗之尧</p>
        <p className="text-gray-400 mb-4">西南财经大学 · 金融学 · 2026届</p>
        
        {/* 联系方式 */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 mb-6">
          <div className="flex items-center gap-1">
            <Phone size={14} className="text-neon-blue" />
            <span>131-0130-2538</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={14} className="text-neon-purple" />
            <span>luozhiyao10@qq.com</span>
          </div>
        </div>
        
        {/* 核心亮点 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-3 hover:border-neon-blue/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <item.icon className="text-neon-blue mx-auto mb-2" size={20} />
              <h3 className="font-semibold text-white text-sm">{item.title}</h3>
              <p className="text-gray-400 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 实习经历 */}
      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Briefcase className="text-neon-blue" size={20} />
          实习经历
        </h2>
        <div className="space-y-6">
          {internships.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-blue/50 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <h3 className="font-semibold text-white text-lg">{exp.company}</h3>
                  <p className="text-neon-blue text-sm font-medium">{exp.position}</p>
                </div>
                <span className="text-xs text-neon-purple font-mono mt-1 sm:mt-0">{exp.period}</span>
              </div>
              
              {exp.projects ? (
                <div className="space-y-4">
                  {exp.projects.map((project, pIndex) => (
                    <div key={pIndex} className="border-l-2 border-neon-purple/30 pl-4">
                      <h4 className="font-medium text-gray-200 mb-2">{project.name}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 项目经历 */}
      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Code className="text-neon-purple" size={20} />
          项目经历
        </h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-purple/50 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <h3 className="font-semibold text-white mb-3">{project.name}</h3>
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
              <div className="space-y-2">
                {project.details.map((detail, dIndex) => (
                  <div key={dIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-neon-pink rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400 text-xs">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 校园经历 */}
      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Users className="text-neon-pink" size={20} />
          校园经历
        </h2>
        <div className="space-y-4">
          {campusExperience.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-pink/50 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="font-semibold text-white">{exp.organization}</h3>
                  <p className="text-neon-pink text-sm">{exp.department}</p>
                </div>
                <span className="text-xs text-neon-blue font-mono mt-1 sm:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 技能总结 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Database className="text-neon-blue" size={20} />
          技能总结
        </h2>
        <div className="space-y-4">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-blue/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <h3 className="font-semibold text-white mb-3">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-neon-blue/50 transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ProfileSection;